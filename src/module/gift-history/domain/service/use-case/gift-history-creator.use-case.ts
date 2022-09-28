import { GiftHistory } from '../../model/gift-history.model';
import { CreateGiftHistoryData } from './port/gift-history-creator.input';

export interface GiftHistoryCreatorUseCaseInterface {
  exchangeGift(createGiftHistoryData: CreateGiftHistoryData, exchangeQuantity: number): Promise<GiftHistory[]>;
}
