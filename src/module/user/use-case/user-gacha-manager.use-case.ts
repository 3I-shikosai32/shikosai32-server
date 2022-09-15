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

  async pullGacha(args: PullGachaArgs, pullItem: (items: Item[]) => Item) {
    const foundUser = await this.userRepository.findUnique(args);
    if (!foundUser) {
      throw new Error('User not found');
    }

    const foundItems = await this.itemRepository.findMany({
      where: {
        character: foundUser.character,
      },
    });

    const pulledItem = pullItem(foundItems);

    const decrementedPullableGachaTimes = foundUser.pullableGachaTimes - 1; // TODO: これはModelに移す
    if (decrementedPullableGachaTimes < 0) {
      throw new Error('Pullable gacha times is less than 0');
    }

    await this.userRepository.update({
      ...args,
      data: {
        pullableGachaTimes: decrementedPullableGachaTimes,
      },
    });

    return pulledItem;
  }
}
