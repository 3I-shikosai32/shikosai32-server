import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import Item from '../item/dto/object';
import ItemService from '../item/item.service';
import PullGachaArgs from './dto/args/pullGacha';
import UserService from './user.service';
import AuthGuard from '@/guards/auth.guard';
import FirebaseService from '@/libs/firebase/firebase.service';

@Resolver()
@UseGuards(AuthGuard)
export default class UserMutation {
  constructor(private service: UserService, private itemService: ItemService, private firebaseService: FirebaseService) {}

  @Mutation(() => Item)
  async pullGacha(@Args() args: PullGachaArgs) {
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
        pullableGachaTimes: user.pullableGachaTimes - 1,
      },
    });

    return pulledItem;
  }
}
