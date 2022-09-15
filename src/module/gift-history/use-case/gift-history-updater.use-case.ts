import { Inject } from '@nestjs/common';
import { UpdateGiftHistoryArgs } from '../controller/dto/args/update-gift-history.args';
import { GiftHistoryRepositoryInterface } from '../domain/service/repository/gift-history.repository';
import { GiftHistoryUpdaterUseCaseInterface } from '../domain/service/use-case/gift-history-updater.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';

export class GiftHistoryUpdaterUseCase implements GiftHistoryUpdaterUseCaseInterface {
  constructor(
    @Inject(InjectionToken.GIFT_HISTORY_REPOSITORY)
    private readonly giftHistoryRepository: GiftHistoryRepositoryInterface,
  ) {}

  async updateGiftHistory(args: UpdateGiftHistoryArgs) {
    const updateGiftHistory = await this.giftHistoryRepository.update({
      ...args,
      data: {
        ...args.data,
        deliveredAt: args.data.isDelivered ? new Date() : null,
      },
    });

    return updateGiftHistory;
  }
}
