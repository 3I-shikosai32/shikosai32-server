import { GiftHistory } from '../../model/gift-history.model';
import { ExchangeGiftArgs } from '~/gift-history/controller/dto/args/exchange-gift.args';

export interface GiftHistoryCreatorUseCaseInterface {
  exchangeGift(args: ExchangeGiftArgs): Promise<GiftHistory[]>;
}
