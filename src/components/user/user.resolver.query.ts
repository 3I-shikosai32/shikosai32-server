import { Query, Resolver } from '@nestjs/graphql';
import UserService from './user.service';

@Resolver()
export default class UserQuery {
  constructor(private service: UserService) {}

  @Query(() => String)
  async tmp() {
    return 'tmp';
  }
}
