import { Inject, Logger } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { ItemCompletedHistory as ItemCompletedHistoryModel } from '../domain/model/item-completed-history.model';
import { ItemCompletedHistoryReaderUseCaseInterface } from '../domain/service/use-case/item-completed-history-reader.use-case';
import { FindItemCompletedHistoriesArgs } from './dto/args/find-item-completed-histories.args';
import { ItemCompletedHistory } from './dto/object/item-completed-history.object';
import { InjectionToken } from '@/common/constant/injection-token.constant';

@Resolver()
export class ItemCompletedHistoryQuery {
  private readonly logger = new Logger(ItemCompletedHistoryQuery.name);

  constructor(
    @Inject(InjectionToken.ITEM_COMPLETED_HISTORY_READER_USE_CASE)
    private readonly itemCompletedHistoryReaderUseCase: ItemCompletedHistoryReaderUseCaseInterface,
  ) {}

  @Query(() => [ItemCompletedHistory])
  async findItemCompletedHistories(@Args() args: FindItemCompletedHistoriesArgs): Promise<ItemCompletedHistoryModel[]> {
    this.logger.log('findItemCompletedHistories called');
    this.logger.log(args);

    const foundItemCompletedHistories = await this.itemCompletedHistoryReaderUseCase.findItemCompletedHistories(
      args.where,
      args.orderBy,
      args.cursor,
      args.take,
      args.skip,
    );

    return foundItemCompletedHistories;
  }
}
