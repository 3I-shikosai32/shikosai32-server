import { Inject } from '@nestjs/common';
import { BaseDataLoader } from '../base.dataloader';
import { InjectionToken } from '@/common/constant/injection-token.constant';
import { GiftHistory } from '~/gift-history/domain/model/gift-history.model';
import { GiftHistoryRepositoryInterface } from '~/gift-history/domain/service/repository/gift-history.repository';

export class GiftGiftHistoriesDataLoader extends BaseDataLoader<string, GiftHistory[]> {
  constructor(
    @Inject(InjectionToken.GIFT_HISTORY_REPOSITORY)
    private readonly giftHistoryRepository: GiftHistoryRepositoryInterface,
  ) {
    super();
  }

  protected async batchLoad(giftIds: string[]): Promise<(GiftHistory[] | Error)[]> {
    const giftHistories = await this.giftHistoryRepository.findMany({
      where: {
        giftId: { in: giftIds },
      },
    });

    const mappedGiftHistoriesList = giftIds.map((giftId) => {
      const mappedGiftHistories = giftHistories.filter((giftHistory) => giftHistory.id === giftId);
      if (!mappedGiftHistories) {
        return new Error(`GiftHistory with id ${giftId} not found`);
      }

      return mappedGiftHistories;
    });

    return mappedGiftHistoriesList;
  }
}
