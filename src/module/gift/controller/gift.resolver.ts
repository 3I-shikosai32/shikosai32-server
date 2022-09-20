import { Inject } from '@nestjs/common';
import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { Gift as GiftModel } from '../domain/model/gift.model';
import { GiftReaderUseCaseInterface } from '../domain/service/use-case/gift-reader.use-case';
import { Gift } from './dto/object/gift.object';
import { InjectionToken } from '@/common/constant/injection-token.constant';
import { GiftHistory } from '~/gift-history/controller/dto/object/gift-history.object';
import { GiftHistory as GiftHistoryModel } from '~/gift-history/domain/model/gift-history.model';

@Resolver(() => Gift)
export class GiftResolver {
  constructor(
    @Inject(InjectionToken.GIFT_READER_USE_CASE)
    private readonly readerUseCase: GiftReaderUseCaseInterface,
  ) {}

  @ResolveField(() => [GiftHistory])
  async giftHistories(@Parent() gift: GiftModel): Promise<GiftHistoryModel[]> {
    const giftHistories = await this.readerUseCase.findGiftHistoriesByGiftId(gift.id);

    return giftHistories;
  }
}
