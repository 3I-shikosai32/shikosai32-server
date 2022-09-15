import { Inject, Injectable } from '@nestjs/common';
import { FindUserArgs } from '../controller/dto/args/find-user.args';
import { FindUsersArgs } from '../controller/dto/args/find-users.args';
import { UserInterface } from '../domain/service/model/user.model';
import { UserRepositoryInterface } from '../domain/service/repository/user.repository';
import { UserReaderUseCaseInterface } from '../domain/service/use-case/user-reader.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';

@Injectable()
export class UserReaderUseCase implements UserReaderUseCaseInterface {
  constructor(
    @Inject(InjectionToken.USER_REPOSITORY)
    private readonly userRepository: UserRepositoryInterface,
  ) {}

  async findUser(args: FindUserArgs): Promise<UserInterface | null> {
    const foundUser = await this.userRepository.findUnique(args);

    return foundUser;
  }

  async findUsers(args: FindUsersArgs): Promise<UserInterface[]> {
    const foundUsers = await this.userRepository.findMany(args);

    return foundUsers;
  }
}
