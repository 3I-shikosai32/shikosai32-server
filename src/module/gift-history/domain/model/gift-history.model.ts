import { NestedGift } from '~/gift/domain/model/nested-gift.model';
import { NestedUser } from '~/user/domain/model/nested-user.model';

export class GiftHistory {
  id: string;

  isDelivered: boolean;

  user: NestedUser;

  userId: string;

  exchangedGift: NestedGift;

  giftId: string;

  createdAt: Date;

  deliveredAt: Date | null;
}
