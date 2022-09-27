import { Inject, Injectable } from '@nestjs/common';
import { FindUserArgs } from '../controller/dto/args/find-user.args';
import { FindUsersArgs } from '../controller/dto/args/find-users.args';
import { ObtainmentStatus } from '../domain/model/obtainment-status.model';
import { UserRepositoryInterface } from '../domain/service/repository/user.repository';
import { UserReaderUseCaseInterface } from '../domain/service/use-case/user-reader.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';
import { ItemRepositoryInterface } from '~/item/domain/service/repository/item.repository';

@Injectable()
export class UserReaderUseCase implements UserReaderUseCaseInterface {
  constructor(
    @Inject(InjectionToken.USER_REPOSITORY)
    private readonly userRepository: UserRepositoryInterface,
    @Inject(InjectionToken.ITEM_REPOSITORY)
    private readonly itemRepository: ItemRepositoryInterface,
  ) {}

  async findUser(args: FindUserArgs) {
    const foundUser = await this.userRepository.findUnique(args);

    return foundUser;
  }

  async findUsers(args: FindUsersArgs) {
    const foundUsers = await this.userRepository.findMany(args);

    return foundUsers;
  }

  async findItemsByUserId(id: string) {
    const foundItems = await this.userRepository.findItemsByUserId({
      where: { id },
    });

    return foundItems;
  }

  async findGiftHistoriesByUserId(id: string) {
    const foundGiftHistories = await this.userRepository.findGiftHistoriesByUserId({
      where: { id },
    });

    return foundGiftHistories;
  }

  async getObtainmentStatuses(args: FindUserArgs) {
    const foundUser = await this.findUser(args);
    if (!foundUser) {
      throw new Error('User not found');
    }

    const foundItems = await this.itemRepository.findMany({
      where: {
        character: { equals: foundUser.character },
      },
    });

    const obtainmentStatuses = foundItems.map((item) => ({
      item,
      obtained: foundUser.itemIds.includes(item.id),
    }));

    return obtainmentStatuses.map((obtainmentStatus) => new ObtainmentStatus(obtainmentStatus));
  }
}
