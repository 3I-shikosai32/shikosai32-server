import { GiftHistory } from '../../model/gift-history.model';
import { GiftHistoryWhere, GiftHistoryOrderBy, GiftHistoryCursor } from './port/gift-history-reader.input';

export interface GiftHistoryReaderUseCaseInterface {
  findGiftHistory(giftHistoryId: string): Promise<GiftHistory | null>;
  findGiftHistories(
    where?: GiftHistoryWhere,
    orderBy?: GiftHistoryOrderBy[],
    cursor?: GiftHistoryCursor,
    take?: number,
    skip?: number,
  ): Promise<GiftHistory[]>;
}
