import { Inject } from '@nestjs/common';
import { BaseDataLoader } from '../base.dataloader';
import { InjectionToken } from '@/common/constant/injection-token.constant';
import { GiftHistory } from '~/gift-history/domain/model/gift-history.model';
import { GiftHistoryRepositoryInterface } from '~/gift-history/domain/service/repository/gift-history.repository';

export class UserGiftHistoriesDataLoader extends BaseDataLoader<string, GiftHistory[]> {
  constructor(
    @Inject(InjectionToken.GIFT_HISTORY_REPOSITORY)
    private readonly giftHistoryRepository: GiftHistoryRepositoryInterface,
  ) {
    super();
  }

  protected async batchLoad(keys: string[]): Promise<(GiftHistory[] | Error)[]> {
    const giftHistoriesList = await Promise.all(
      keys.map((key) =>
        this.giftHistoryRepository.findMany({
          where: {
            userId: key,
          },
        }),
      ),
    );

    return giftHistoriesList;
  }
}
