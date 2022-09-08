import { Resolver, Query, Args } from '@nestjs/graphql';
import FindUserArgs from './dto/args/findUser';
import FindUsersArgs from './dto/args/findUsers';
import User from './dto/object';
import UserService from './user.service';

@Resolver()
export default class UserQuery {
  constructor(private service: UserService) {}

  @Query(() => User, { nullable: true })
  async findUser(@Args() args: FindUserArgs): Promise<User | null> {
    const user = await this.service.findUnique(args);

    return user;
  }

  @Query(() => [User])
  async findUsers(@Args() args: FindUsersArgs): Promise<User[]> {
    const users = await this.service.findMany(args);

    return users;
  }
}
