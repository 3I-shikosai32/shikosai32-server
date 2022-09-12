import { Resolver, Query, Args } from '@nestjs/graphql';
import ItemService from '../item/item.service';
import FindUserArgs from './dto/args/findUser';
import FindUsersArgs from './dto/args/findUsers';
import GetObtainmentStatusesArgs from './dto/args/getObtainmentStatuses';
import User from './dto/object';
import ObtainmentStatus from './dto/object/obtainmentStatus';
import UserService from './user.service';

@Resolver()
export default class UserQuery {
  constructor(private service: UserService, private itemService: ItemService) {}

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

  @Query(() => [ObtainmentStatus])
  async getObtainmentStatuses(@Args() args: GetObtainmentStatusesArgs): Promise<ObtainmentStatus[]> {
    const user = await this.service.findUnique(args);
    if (!user) {
      throw new Error('User not found');
    }

    const items = await this.itemService.findMany({
      where: {
        character: { equals: user.character },
      },
    });

    const obtainmentStatuses = items.map((item) => ({
      item,
      obtained: user.itemIds.includes(item.id),
    }));

    return obtainmentStatuses;
  }
}
