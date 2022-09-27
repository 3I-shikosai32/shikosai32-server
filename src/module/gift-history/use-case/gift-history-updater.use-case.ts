import { Inject, Injectable } from '@nestjs/common';
import { GiftHistoryRepositoryInterface } from '../domain/service/repository/gift-history.repository';
import { GiftHistoryUpdaterUseCaseInterface } from '../domain/service/use-case/gift-history-updater.use-case';
import { UpdateGiftHistoryData } from '../domain/service/use-case/port/gift-history-updater.input';
import { InjectionToken } from '@/common/constant/injection-token.constant';

@Injectable()
export class GiftHistoryUpdaterUseCase implements GiftHistoryUpdaterUseCaseInterface {
  constructor(
    @Inject(InjectionToken.GIFT_HISTORY_REPOSITORY)
    private readonly giftHistoryRepository: GiftHistoryRepositoryInterface,
  ) {}

  async updateGiftHistory(giftHistoryId: string, updateGiftHistoryData: UpdateGiftHistoryData) {
    const updateGiftHistory = await this.giftHistoryRepository.update({
      where: { id: giftHistoryId },
      data: {
        ...updateGiftHistoryData,
        deliveredAt: updateGiftHistoryData.isDelivered ? new Date() : null,
      },
    });

    return updateGiftHistory;
  }
}
