import { Inject, Injectable, Scope } from '@nestjs/common';
import { InjectionToken } from '@/common/constant/injection-token.constant';
import { BaseDataLoader } from '@/common/dataloader/base.dataloader';
import { GiftHistory } from '~/gift-history/domain/model/gift-history.model';
import { GiftHistoryRepositoryInterface } from '~/gift-history/domain/service/repository/gift-history.repository';

@Injectable({ scope: Scope.REQUEST })
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
      const mappedGiftHistories = giftHistories.filter((giftHistory) => giftHistory.giftId === giftId);
      if (mappedGiftHistories.length === 0) {
        return new Error(`GiftHistory with giftId ${giftId} not found`);
      }

      return mappedGiftHistories;
    });

    return mappedGiftHistoriesList;
  }
}
