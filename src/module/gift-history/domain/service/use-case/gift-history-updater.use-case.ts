import { GiftHistoryInterface } from '../model/gift-history.model';
import { UpdateGiftHistoryArgs } from '~/gift-history/controller/dto/args/update-gift-history.args';

export interface GiftHistoryUpdaterUseCaseInterface {
  updateGiftHistory(args: UpdateGiftHistoryArgs): Promise<GiftHistoryInterface>;
}
