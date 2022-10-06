import { ItemCompletedHistory } from '../../model/item-completed-history.model';

export interface ItemCompletedHistoryDeliveryManagerUseCaseInterface {
  changeDeliveryStatus(giftHistoryId: string, isDelivered: boolean): Promise<ItemCompletedHistory>;
}
