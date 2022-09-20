import { Inject, Injectable } from '@nestjs/common';
import { ExchangeGiftArgs } from '../controller/dto/args/exchange-gift.args';
import { GiftHistoryRepositoryInterface } from '../domain/service/repository/gift-history.repository';
import { GiftHistoryCreatorUseCaseInterface } from '../domain/service/use-case/gift-history-creator.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';
import { GiftRepositoryInterface } from '~/gift/domain/service/repository/gift.repository';
import { UserRepositoryInterface } from '~/user/domain/service/repository/user.repository';

@Injectable()
export class GiftHistoryCreatorUseCase implements GiftHistoryCreatorUseCaseInterface {
  constructor(
    @Inject(InjectionToken.USER_REPOSITORY)
    private readonly userRepository: UserRepositoryInterface,
    @Inject(InjectionToken.GIFT_REPOSITORY)
    private readonly giftRepository: GiftRepositoryInterface,
    @Inject(InjectionToken.GIFT_HISTORY_REPOSITORY)
    private readonly giftHistoryRepository: GiftHistoryRepositoryInterface,
  ) {}

  async exchangeGift(args: ExchangeGiftArgs) {
    const foundGift = await this.giftRepository.findUnique({
      where: {
        id: args.data.giftId,
      },
    });
    if (!foundGift) {
      throw new Error('Gift not found');
    }

    const foundUser = await this.userRepository.findUnique({
      where: {
        id: args.data.userId,
      },
    });
    if (!foundUser) {
      throw new Error('User not found');
    }

    if (!foundUser.canExchangeGift(foundGift.price * args.exchangeQuantity)) {
      throw new Error('Consumable point is less than 0');
    }

    await this.userRepository.update({
      where: {
        id: args.data.userId,
      },
      data: {
        consumablePoint: foundUser.consumablePoint - foundGift.price * args.exchangeQuantity,
      },
    });

    const createdGiftHistories = await Promise.all(
      new Array<null>(args.exchangeQuantity).fill(null).map(async () => {
        const createdGiftHistory = await this.giftHistoryRepository.create({
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

        return createdGiftHistory;
      }),
    );

    return createdGiftHistories;
  }
}
