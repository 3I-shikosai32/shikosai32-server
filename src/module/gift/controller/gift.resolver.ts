import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { GiftGiftHistoriesDataLoader } from '../dataloader/gift-gift-histories.dataloader';
import { Gift as GiftModel } from '../domain/model/gift.model';
import { Gift } from './dto/object/gift.object';
import { GiftHistory } from '~/gift-history/controller/dto/object/gift-history.object';
import { GiftHistory as GiftHistoryModel } from '~/gift-history/domain/model/gift-history.model';

@Resolver(() => Gift)
export class GiftResolver {
  constructor(private readonly giftGiftHistoriesDataLoader: GiftGiftHistoriesDataLoader) {}

  @ResolveField(() => [GiftHistory])
  async giftHistories(@Parent() gift: GiftModel): Promise<GiftHistoryModel[]> {
    const giftHistories = await this.giftGiftHistoriesDataLoader.load(gift.id);

    return giftHistories;
  }
}
