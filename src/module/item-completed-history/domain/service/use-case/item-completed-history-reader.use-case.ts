import { ItemCompletedHistory } from '../../model/item-completed-history.model';
import { ItemCompletedHistoryWhere, ItemCompletedHistoryOrderBy, ItemCompletedHistoryCursor } from './port/item-completed-history-reader.input';

export interface ItemCompletedHistoryReaderUseCaseInterface {
  findItemCompletedHistories(
    where?: ItemCompletedHistoryWhere,
    orderBy?: ItemCompletedHistoryOrderBy[],
    cursor?: ItemCompletedHistoryCursor,
    take?: number,
    skip?: number,
  ): Promise<ItemCompletedHistory[]>;
}
