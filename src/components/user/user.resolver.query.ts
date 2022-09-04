import { Resolver, Query, Args } from '@nestjs/graphql';
import FindUserArgs from './dto/args/findUser';
import User from './dto/object';
import UserService from './user.service';

@Resolver()
export default class UserQuery {
  constructor(private service: UserService) {}

  @Query(() => User, { nullable: true })
  async findUserById(@Args() args: FindUserArgs) {
    const user = await this.service.findUnique(args);

    return user;
  }
}
