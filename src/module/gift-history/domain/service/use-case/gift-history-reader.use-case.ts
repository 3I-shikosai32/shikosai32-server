import { GiftHistory } from '../../model/gift-history.model';
import { GiftHistoryWhere, GiftHistoryOrderBy, GiftHistoryCursor } from './port/gift-history-reader.input';
import { Gift } from '~/gift/domain/model/gift.model';
import { User } from '~/user/domain/model/user.model';

export interface GiftHistoryReaderUseCaseInterface {
  findGiftHistory(giftHistoryId: string): Promise<GiftHistory | null>;
  findGiftHistories(
    where?: GiftHistoryWhere,
    orderBy?: GiftHistoryOrderBy[],
    cursor?: GiftHistoryCursor,
    take?: number,
    skip?: number,
  ): Promise<GiftHistory[]>;
  findUserByGiftHistoryId(id: string): Promise<User | null>;
  findGiftByGiftHistoryId(id: string): Promise<Gift | null>;
}
