import { GiftHistory } from '../../model/gift-history.model';
import { UpdateGiftHistoryData } from './port/gift-history-updater.input';

export interface GiftHistoryDeliveryManagerUseCaseInterface {
  changeDeliveryState(giftHistoryId: string, updateGiftHistoryData: UpdateGiftHistoryData): Promise<GiftHistory>;
}
