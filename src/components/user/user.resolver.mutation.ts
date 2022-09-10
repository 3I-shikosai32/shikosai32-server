import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Game } from '@prisma/client';
import Item from '../item/dto/object';
import ItemService from '../item/item.service';
import CreateUserArgs from './dto/args/createUser';
import ExitGameArgs from './dto/args/exitGame';
import IncrementTotalPointArgs from './dto/args/incrementTotalPoint';
import JoinGameArgs from './dto/args/joinGame';
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

  @Mutation(() => User)
  async incrementTotalPoint(@Args() args: IncrementTotalPointArgs): Promise<User> {
    let user = await this.service.findUnique({
      where: args.where,
    });
    if (!user) {
      throw new Error('User not found');
    }

    const now = new Date(Date.now() + (new Date().getTimezoneOffset() + 9 * 60) * 60 * 1000);
    if (now <= new Date('2022-10-22')) {
      user = await this.service.update({
        where: args.where,
        data: {
          totalPointDay1: user.totalPointDay1 + args.increment,
          consumablePoint: user.consumablePoint + args.increment,
        },
      });
    } else {
      user = await this.service.update({
        where: args.where,
        data: {
          totalPointDay2: user.totalPointDay2 + args.increment,
          consumablePoint: user.consumablePoint + args.increment,
        },
      });
    }

    return user;
  }

  @Mutation(() => User)
  async joinGame(@Args() args: JoinGameArgs): Promise<User> {
    const user = await this.service.update({
      where: args.where,
      data: {
        participateGame: args.game,
      },
    });

    return user;
  }

  @Mutation(() => User)
  async exitGame(@Args() args: ExitGameArgs): Promise<User> {
    const user = await this.service.update({
      where: args.where,
      data: {
        participateGame: Game.NONE,
      },
    });

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
