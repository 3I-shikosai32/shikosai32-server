import { NestedGiftInterface } from '~/gift/domain/service/model/nested-gift.model';
import { NestedUserInterface } from '~/user/domain/service/model/nested-user.model';

export interface GiftHistoryInterface {
  id: string;
  isDelivered: boolean;
  user: NestedUserInterface;
  userId: string;
  exchangedGift: NestedGiftInterface;
  giftId: string;
  createdAt: Date;
  deliveredAt: Date | null;
}
