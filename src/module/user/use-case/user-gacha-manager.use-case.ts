import { Inject, Injectable } from '@nestjs/common';
import { PullGachaArgs } from '../controller/dto/args/pull-gacha.args';
import { UserRepositoryInterface } from '../domain/service/repository/user.repository';
import { UserGachaManagerUseCaseInterface } from '../domain/service/use-case/user-gacha-manager.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';
import { Item } from '~/item/domain/model/item.model';
import { ItemRepository } from '~/item/repository/item.repository';

@Injectable()
export class UserGachaManagerUseCase implements UserGachaManagerUseCaseInterface {
  constructor(
    @Inject(InjectionToken.USER_REPOSITORY)
    private readonly userRepository: UserRepositoryInterface,
    @Inject(InjectionToken.ITEM_REPOSITORY)
    private readonly itemRepository: ItemRepository,
  ) {}

  async pullGacha(args: PullGachaArgs, pullFromItems: (items: Item[]) => Item) {
    const foundUserWithItems = await this.userRepository.findUniqueWithItems(args);
    if (!foundUserWithItems) {
      throw new Error('User not found');
    }

    const [foundUser, foundOldItems] = foundUserWithItems;

    if (!foundUser.canPullGacha()) {
      throw new Error('Pullable gacha times is less than 0');
    }

    const foundItems = await this.itemRepository.findMany({
      where: {
        character: foundUser.character,
      },
    });

    const pulledItem = pullFromItems(foundItems);

    await this.userRepository.update({
      ...args,
      data: {
        items: foundOldItems.includes(pulledItem)
          ? undefined
          : { connect: [...foundOldItems.map((item) => ({ id: item.id })), { id: pulledItem.id }] },
        itemIds: foundUser.itemIds.includes(pulledItem.id) ? undefined : [...foundUser.itemIds, pulledItem.id],
        pullableGachaTimes: foundUser.pullableGachaTimes - 1,
      },
    });

    return pulledItem;
  }
}
