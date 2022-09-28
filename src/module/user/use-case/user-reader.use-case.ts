import { Inject, Injectable } from '@nestjs/common';
import { ObtainmentStatus } from '../domain/model/obtainment-status.model';
import { UserRepositoryInterface } from '../domain/service/repository/user.repository';
import { UserCursor, UserOrderBy, UserWhere } from '../domain/service/use-case/port/user-reader.input';
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

  async findUser(userId: string) {
    const foundUser = await this.userRepository.findUnique({
      where: { id: userId },
    });

    return foundUser;
  }

  async findUsers(where?: UserWhere, orderBy?: UserOrderBy[], cursor?: UserCursor, take?: number, skip?: number) {
    const foundUsers = await this.userRepository.findMany({
      where,
      orderBy,
      cursor,
      take,
      skip,
    });

    return foundUsers;
  }

  async getObtainmentStatuses(userId: string) {
    const foundUser = await this.userRepository.findUnique({
      where: { id: userId },
    });
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
