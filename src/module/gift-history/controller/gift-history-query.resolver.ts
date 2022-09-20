import { Inject } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { GiftHistoryReaderUseCaseInterface } from '../domain/service/use-case/gift-history-reader.use-case';
import { FindGiftHistoriesArgs } from './dto/args/find-gift-histories.args';
import { FindGiftHistoryArgs } from './dto/args/find-gift-history.args';
import { GiftHistory } from './dto/object/gift-history.object';
import { InjectionToken } from '@/common/constant/injection-token.constant';

@Resolver()
export class GiftHistoryQuery {
  constructor(
    @Inject(InjectionToken.GIFT_HISTORY_READER_USE_CASE)
    private readonly giftHistoryReaderUseCase: GiftHistoryReaderUseCaseInterface,
  ) {}

  @Query(() => GiftHistory, { nullable: true })
  async findGiftHistory(@Args() args: FindGiftHistoryArgs): Promise<GiftHistory | null> {
    const foundGiftHistory = await this.giftHistoryReaderUseCase.findGiftHistory(args);

    return foundGiftHistory;
  }

  @Query(() => [GiftHistory])
  async findGiftHistories(@Args() args: FindGiftHistoriesArgs): Promise<GiftHistory[]> {
    const foundGiftHistories = await this.giftHistoryReaderUseCase.findGiftHistories(args);

    return foundGiftHistories;
  }
}
