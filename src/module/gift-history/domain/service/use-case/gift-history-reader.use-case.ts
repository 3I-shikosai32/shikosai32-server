import { GiftHistory } from '../../model/gift-history.model';
import { FindGiftHistoriesArgs } from '~/gift-history/controller/dto/args/find-gift-histories.args';
import { FindGiftHistoryArgs } from '~/gift-history/controller/dto/args/find-gift-history.args';
import { Gift } from '~/gift/domain/model/gift.model';
import { User } from '~/user/domain/model/user.model';

export interface GiftHistoryReaderUseCaseInterface {
  findGiftHistory(args: FindGiftHistoryArgs): Promise<GiftHistory | null>;
  findGiftHistories(args: FindGiftHistoriesArgs): Promise<GiftHistory[]>;
  findUserByGiftHistoryId(id: string): Promise<User | null>;
  findGiftByGiftHistoryId(id: string): Promise<Gift | null>;
}
