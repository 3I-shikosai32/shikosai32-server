import { Inject } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { User as UserModel } from '../domain/model/user.model';
import { UserReaderUseCaseInterface } from '../domain/service/use-case/user-reader.use-case';
import { FindUserArgs } from './dto/args/find-user.args';
import { FindUsersArgs } from './dto/args/find-users.args';
import { User } from './dto/object/user.object';
import { InjectionToken } from '@/common/constant/injection-token.constant';

@Resolver()
export class UserQuery {
  constructor(
    @Inject(InjectionToken.USER_READER_USE_CASE)
    private readonly readerUseCase: UserReaderUseCaseInterface,
  ) {}

  @Query(() => User, { nullable: true })
  async findUser(@Args() args: FindUserArgs): Promise<UserModel | null> {
    const user = await this.readerUseCase.findUser(args);

    return user;
  }

  @Query(() => [User])
  async findUsers(@Args() args: FindUsersArgs): Promise<UserModel[]> {
    const users = await this.readerUseCase.findUsers(args);

    return users;
  }
}
