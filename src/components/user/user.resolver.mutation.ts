import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Game } from '@prisma/client';
import Item from '../item/dto/object';
import ItemService from '../item/item.service';
import CreateUserArgs from './dto/args/createUser';
import ExitGameArgs from './dto/args/exitGame';
import IncrementPointArgs from './dto/args/incrementPoint';
import JoinGameArgs from './dto/args/joinGame';
import PullGachaArgs from './dto/args/pullGacha';
import UpdateUserArgs from './dto/args/updateUser';
import User from './dto/object';
import { publishUpdatedGameAttenders } from './user.resolver.subscription';
import UserService from './user.service';
import AuthGuard from '@/guards/auth.guard';
import RoleGuard from '@/guards/role.guard';
import PubSubService from '@/libs/pubsub/pubsub.service';

@Resolver()
@UseGuards(AuthGuard)
export default class UserMutation {
  constructor(private service: UserService, private itemService: ItemService, private pubSubService: PubSubService) {}

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

    await this.firebaseService.adminAuth.updateUser(user.id, { displayName: args.data.name, email: args.data.email });

    return user;
  }

  @Mutation(() => User)
  async updateUser(@Args() args: UpdateUserArgs): Promise<User> {
    const user = await this.service.update(args);

    await this.firebaseService.adminAuth.updateUser(args.where.id, { displayName: args.data.name });

    return user;
  }

  @Mutation(() => [User])
  @UseGuards(RoleGuard)
  async incrementPoint(@Args() args: IncrementPointArgs): Promise<User[]> {
    const now = new Date(Date.now() + (new Date().getTimezoneOffset() + 9 * 60) * 60 * 1000);
    const isBeforeDay2 = now <= new Date('2022-10-22');

    const users = await Promise.all(
      args.users.map(async (arg) => {
        const foundUser = await this.service.findUnique({
          where: { id: arg.id },
        });
        if (!foundUser) {
          throw new Error('User not found');
        }

        let updatedUser: User;
        if (isBeforeDay2) {
          updatedUser = await this.service.update({
            where: { id: arg.id },
            data: {
              totalPointDay1: foundUser.totalPointDay1 + arg.increment,
              consumablePoint: foundUser.consumablePoint + arg.increment,
              pullableGachaTimes: foundUser.pullableGachaTimes + 1,
            },
          });
        } else {
          updatedUser = await this.service.update({
            where: { id: arg.id },
            data: {
              totalPointDay2: foundUser.totalPointDay2 + arg.increment,
              consumablePoint: foundUser.consumablePoint + arg.increment,
              pullableGachaTimes: foundUser.pullableGachaTimes + 1,
            },
          });
        }

        return updatedUser;
      }),
    );

    return users;
  }

  @Mutation(() => User)
  async joinGame(@Args() args: JoinGameArgs): Promise<User> {
    const user = await this.service.update({
      where: args.where,
      data: {
        participateGame: args.game,
      },
    });

    await publishUpdatedGameAttenders(this.pubSubService, this.service);

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

    await publishUpdatedGameAttenders(this.pubSubService, this.service);

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
      throw new Error('Pullable gacha times is less than 0');
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
