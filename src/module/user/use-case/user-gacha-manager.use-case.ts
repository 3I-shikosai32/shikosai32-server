import { Inject, Injectable } from '@nestjs/common';
import { UserRepositoryInterface } from '../domain/service/repository/user.repository';
import { UserGachaManagerUseCaseInterface } from '../domain/service/use-case/user-gacha-manager.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';
import { CharacterStatusRepositoryInterface } from '~/character-status/domain/service/repository/character-status.repository';
import { Item } from '~/item/domain/model/item.model';
import { ItemRepositoryInterface } from '~/item/domain/service/repository/item.repository';

@Injectable()
export class UserGachaManagerUseCase implements UserGachaManagerUseCaseInterface {
  constructor(
    @Inject(InjectionToken.USER_REPOSITORY)
    private readonly userRepository: UserRepositoryInterface,
    @Inject(InjectionToken.CHARACTER_STATUS_REPOSITORY)
    private readonly characterStatusRepository: CharacterStatusRepositoryInterface,
    @Inject(InjectionToken.ITEM_REPOSITORY)
    private readonly itemRepository: ItemRepositoryInterface,
  ) {}

  async pullGacha(userId: string, pullFromItems: (items: Item[]) => Item) {
    const foundUserWithRelations = await this.userRepository.findUniqueWithRelations({
      where: { id: userId },
    });
    if (!foundUserWithRelations) {
      throw new Error('User not found');
    }

    const [foundUser, foundCharacterStatus, foundOldItems] = foundUserWithRelations;

    if (!foundUser.canPullGacha(foundCharacterStatus)) {
      throw new Error('Pullable gacha times is less than 0 or item is already complete');
    }

    const foundItems = await this.itemRepository.findMany({
      where: {
        character: foundCharacterStatus.character,
      },
    });

    const pulledItem = pullFromItems(foundItems);

    await this.userRepository.update({
      where: { id: userId },
      data: {
        pullableGachaTimes: foundUser.pullableGachaTimes - 1,
      },
    });
    const updatedCharacterStatus = await this.characterStatusRepository.update({
      where: { id: foundCharacterStatus.id },
      data: {
        items: foundOldItems.includes(pulledItem)
          ? undefined
          : { connect: [...foundOldItems.map((item) => ({ id: item.id })), { id: pulledItem.id }] },
        itemIds: foundCharacterStatus.itemIds.includes(pulledItem.id) ? undefined : [...foundCharacterStatus.itemIds, pulledItem.id],
      },
    });

    if (updatedCharacterStatus.shouldCreateItemCompletedHistory()) {
      await this.characterStatusRepository.update({
        where: { id: updatedCharacterStatus.id },
        data: {
          itemCompletedHistory: {
            isDelivered: false,
            createdAt: new Date(),
            deliveredAt: null,
          },
        },
      });
    }

    return pulledItem;
  }
}
