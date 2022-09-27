import { Inject, Injectable } from '@nestjs/common';
import { UserRepositoryInterface } from '../domain/service/repository/user.repository';
import { UserCursor, UserOrderBy, UserWhere } from '../domain/service/use-case/port/user-reader.input';
import { UserReaderUseCaseInterface } from '../domain/service/use-case/user-reader.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';

@Injectable()
export class UserReaderUseCase implements UserReaderUseCaseInterface {
  constructor(
    @Inject(InjectionToken.USER_REPOSITORY)
    private readonly userRepository: UserRepositoryInterface,
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
}
