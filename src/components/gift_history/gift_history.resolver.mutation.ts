import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import GiftService from '../gift/gift.service';
import UserService from '../user/user.service';
import ExchangeGiftArgs from './dto/args/exchangeGift';
import UpdateGiftHistoryArgs from './dto/args/updateGiftHistory';
import GiftHistory from './dto/object';
import GiftHistoryService from './gift_history.service';
import AuthGuard from '@/guards/auth.guard';
import RoleGuard from '@/guards/role.guard';

@Resolver()
@UseGuards(AuthGuard)
export default class GiftHistoryMutation {
  constructor(private service: GiftHistoryService, private userService: UserService, private giftService: GiftService) {}

  @Mutation(() => GiftHistory)
  @UseGuards(RoleGuard)
  async updateGiftHistory(@Args() args: UpdateGiftHistoryArgs): Promise<GiftHistory> {
    const giftHistory = await this.service.update({
      ...args,
      data: {
        ...args.data,
        deliveredAt: args.data.isDelivered ? new Date() : null,
      },
    });

    return giftHistory;
  }

  @Mutation(() => [GiftHistory])
  async exchangeGift(@Args() args: ExchangeGiftArgs): Promise<GiftHistory[]> {
    const gift = await this.giftService.findUnique({
      where: {
        id: args.data.giftId,
      },
    });
    if (!gift) {
      throw new Error('Gift not found');
    }

    const user = await this.userService.findUnique({
      where: {
        id: args.data.userId,
      },
    });
    if (!user) {
      throw new Error('User not found');
    }

    const decrementedConsumablePoint = user.consumablePoint - gift.price * args.exchangeQuantity;
    if (decrementedConsumablePoint < 0) {
      throw new Error('Consumable point is less than 0');
    }
    await this.userService.update({
      where: {
        id: args.data.userId,
      },
      data: {
        consumablePoint: decrementedConsumablePoint,
      },
    });

    const giftHistories = await Promise.all(
      new Array<null>(args.exchangeQuantity).fill(null).map(async () => {
        const giftHistory = await this.service.create({
          data: {
            ...args.data,
            user: {
              connect: { id: args.data.userId },
            },
            exchangedGift: {
              connect: { id: args.data.giftId },
            },
          },
        });

        return giftHistory;
      }),
    );

    return giftHistories;
  }
}
