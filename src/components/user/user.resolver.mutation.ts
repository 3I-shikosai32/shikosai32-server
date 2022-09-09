import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import Item from '../item/dto/object';
import ItemService from '../item/item.service';
import CreateUserArgs from './dto/args/createUser';
import PullGachaArgs from './dto/args/pullGacha';
import UpdateUserArgs from './dto/args/updateUser';
import User from './dto/object';
import UserService from './user.service';
import AuthGuard from '@/guards/auth.guard';
import FirebaseService from '@/libs/firebase/firebase.service';

@Resolver()
@UseGuards(AuthGuard)
export default class UserMutation {
  constructor(private service: UserService, private itemService: ItemService, private firebaseService: FirebaseService) {}

  @Mutation(() => User)
  async createUser(@Args() args: CreateUserArgs): Promise<User> {
    const items = await this.itemService.findMany({
      where: {
        character: args.data.character,
      },
    });

    const user = await this.service.create({
      data: {
        ...args.data,
        itemIds: items.map((item) => item.id),
        items: {
          connect: items.map((item) => ({ id: item.id })),
        },
        giftHistories: {
          create: args.data.giftHistories,
        },
      },
    });

    return user;
  }

  @Mutation(() => User)
  async updateUser(@Args() args: UpdateUserArgs): Promise<User> {
    const user = await this.service.update(args);

    return user;
  }

  @Mutation(() => Item)
  async pullGacha(@Args() args: PullGachaArgs): Promise<Item> {
    const user = await this.service.findUnique(args);
    if (!user) {
      throw new Error('User not found');
    }

    const items = await this.itemService.findMany({
      where: {
        character: user.character,
      },
    });

    const pulledItem = items[Math.floor(Math.random() * items.length)];

    const decrementedPullableGachaTimes = user.pullableGachaTimes - 1;
    if (decrementedPullableGachaTimes < 0) {
      throw new Error('Internel Server Error: Pullable Gacha Times is less than 0');
    }

    await this.service.update({
      ...args,
      data: {
        pullableGachaTimes: decrementedPullableGachaTimes,
      },
    });

    return pulledItem;
  }
}
