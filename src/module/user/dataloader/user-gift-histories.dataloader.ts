import { Inject, Injectable, Scope } from '@nestjs/common';
import { InjectionToken } from '@/common/constant/injection-token.constant';
import { BaseDataLoader } from '@/common/dataloader/base.dataloader';
import { GiftHistory } from '~/gift-history/domain/model/gift-history.model';
import { GiftHistoryRepositoryInterface } from '~/gift-history/domain/service/repository/gift-history.repository';

@Injectable({ scope: Scope.REQUEST })
export class UserGiftHistoriesDataLoader extends BaseDataLoader<string, GiftHistory[]> {
  constructor(
    @Inject(InjectionToken.GIFT_HISTORY_REPOSITORY)
    private readonly giftHistoryRepository: GiftHistoryRepositoryInterface,
  ) {
    super();
  }

  protected async batchLoad(userIds: string[]): Promise<(GiftHistory[] | Error)[]> {
    const giftHistories = await this.giftHistoryRepository.findMany({
      where: {
        userId: { in: userIds },
      },
    });

    const mappedGiftHistoriesList = userIds.map((userId) => {
      const mappedGiftHistories = giftHistories.filter((giftHistory) => giftHistory.userId === userId);
      if (mappedGiftHistories.length === 0) {
        return new Error(`GiftHistory with userId ${userId} not found`);
      }

      return mappedGiftHistories;
    });

    return mappedGiftHistoriesList;
  }
}
