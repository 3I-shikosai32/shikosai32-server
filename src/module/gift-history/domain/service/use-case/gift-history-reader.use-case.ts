import { GiftHistoryInterface } from '../model/gift-history.model';
import { FindGiftHistoriesArgs } from '~/gift-history/controller/dto/args/find-gift-histories.args';
import { FindGiftHistoryArgs } from '~/gift-history/controller/dto/args/find-gift-history.args';

export interface GiftHistoryReaderUseCaseInterface {
  findGiftHistory(args: FindGiftHistoryArgs): Promise<GiftHistoryInterface | null>;
  findGiftHistories(args: FindGiftHistoriesArgs): Promise<GiftHistoryInterface[]>;
}
