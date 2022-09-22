import { Inject, Logger } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { GiftHistory as GiftHistoryModel } from '../domain/model/gift-history.model';
import { GiftHistoryReaderUseCaseInterface } from '../domain/service/use-case/gift-history-reader.use-case';
import { FindGiftHistoriesArgs } from './dto/args/find-gift-histories.args';
import { FindGiftHistoryArgs } from './dto/args/find-gift-history.args';
import { GiftHistory } from './dto/object/gift-history.object';
import { InjectionToken } from '@/common/constant/injection-token.constant';

@Resolver()
export class GiftHistoryQuery {
  private readonly logger = new Logger(GiftHistoryQuery.name);

  constructor(
    @Inject(InjectionToken.GIFT_HISTORY_READER_USE_CASE)
    private readonly giftHistoryReaderUseCase: GiftHistoryReaderUseCaseInterface,
  ) {}

  @Query(() => GiftHistory, { nullable: true })
  async findGiftHistory(@Args() args: FindGiftHistoryArgs): Promise<GiftHistoryModel | null> {
    this.logger.log('findGiftHistory called');
    this.logger.log(args);

    const foundGiftHistory = await this.giftHistoryReaderUseCase.findGiftHistory(args);

    return foundGiftHistory;
  }

  @Query(() => [GiftHistory])
  async findGiftHistories(@Args() args: FindGiftHistoriesArgs): Promise<GiftHistoryModel[]> {
    this.logger.log('findGiftHistories called');
    this.logger.log(args);

    const foundGiftHistories = await this.giftHistoryReaderUseCase.findGiftHistories(args);

    return foundGiftHistories;
  }
}
