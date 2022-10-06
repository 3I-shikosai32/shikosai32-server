import { Inject, Injectable } from '@nestjs/common';
import { ItemCompletedHistoryRepositoryInterface } from '../domain/service/repository/item-completed-history.repository';
import { ItemCompletedHistoryReaderUseCaseInterface } from '../domain/service/use-case/item-completed-history-reader.use-case';
import {
  ItemCompletedHistoryWhere,
  ItemCompletedHistoryOrderBy,
  ItemCompletedHistoryCursor,
} from '../domain/service/use-case/port/item-completed-history-reader.input';
import { InjectionToken } from '@/common/constant/injection-token.constant';

@Injectable()
export class ItemCompletedHistoryReaderUseCase implements ItemCompletedHistoryReaderUseCaseInterface {
  constructor(
    @Inject(InjectionToken.ITEM_COMPLETED_HISTORY_REPOSITORY)
    private readonly itemCompletedHistoryRepository: ItemCompletedHistoryRepositoryInterface,
  ) {}

  async findItemCompletedHistories(
    where?: ItemCompletedHistoryWhere,
    orderBy?: ItemCompletedHistoryOrderBy[],
    cursor?: ItemCompletedHistoryCursor,
    take?: number,
    skip?: number,
  ) {
    const foundItemCompletedHistories = await this.itemCompletedHistoryRepository.findMany({
      where,
      orderBy,
      cursor,
      take,
      skip,
    });

    return foundItemCompletedHistories;
  }
}
