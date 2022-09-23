import { Inject } from '@nestjs/common';
import { BaseDataLoader } from '../base.dataloader';
import { InjectionToken } from '@/common/constant/injection-token.constant';
import { Gift } from '~/gift/domain/model/gift.model';
import { GiftRepositoryInterface } from '~/gift/domain/service/repository/gift.repository';

export class GiftDataLoader extends BaseDataLoader<string, Gift> {
  constructor(
    @Inject(InjectionToken.GIFT_REPOSITORY)
    private readonly giftRepository: GiftRepositoryInterface,
  ) {
    super();
  }

  protected async batchLoad(giftIds: string[]): Promise<(Gift | Error)[]> {
    const gifts = await this.giftRepository.findMany({
      where: {
        id: { in: giftIds },
      },
    });

    const mappedGifts = giftIds.map((giftId) => {
      const gift = gifts.find((g) => g.id === giftId);

      return gift || new Error(`Gift with id ${giftId} not found`);
    });

    return mappedGifts;
  }
}
