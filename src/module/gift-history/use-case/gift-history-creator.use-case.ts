import { Inject, Injectable } from '@nestjs/common';
import { Create, GiftHistoryRepositoryInterface } from '../domain/service/repository/gift-history.repository';
import { GiftHistoryCreatorUseCaseInterface } from '../domain/service/use-case/gift-history-creator.use-case';
import { CreateGiftHistoryData } from '../domain/service/use-case/port/gift-history-creator.input';
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

  async exchangeGift(createGiftHistoryData: CreateGiftHistoryData, exchangeQuantity: number) {
    const foundUser = await this.userRepository.findUnique({
      where: {
        id: createGiftHistoryData.userId,
      },
    });
    if (!foundUser) {
      throw new Error('User not found');
    }

    const foundGift = await this.giftRepository.findUnique({
      where: {
        id: createGiftHistoryData.giftId,
      },
    });
    if (!foundGift) {
      throw new Error('Gift not found');
    }

    if (!foundUser.canExchangeGift(foundGift.price * exchangeQuantity)) {
      throw new Error('Consumable point is less than 0');
    }

    await this.userRepository.update({
      where: {
        id: createGiftHistoryData.userId,
      },
      data: {
        consumablePoint: foundUser.consumablePoint - foundGift.price * exchangeQuantity,
      },
    });

    const createdGiftHistories = await this.giftHistoryRepository.createMany(
      Array.from<never, Create>({ length: exchangeQuantity }, () => ({
        data: {
          ...createGiftHistoryData,
          user: {
            connect: { id: createGiftHistoryData.userId },
          },
          exchangedGift: {
            connect: { id: createGiftHistoryData.giftId },
          },
        },
      })),
    );

    return createdGiftHistories;
  }
}
