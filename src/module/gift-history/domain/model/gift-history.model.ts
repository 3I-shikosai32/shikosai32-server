import { NestedGift } from '~/gift/domain/model/nested-gift.model';
import { NestedUser } from '~/user/domain/model/nested-user.model';

export class GiftHistory {
  readonly id: string;

  readonly isDelivered: boolean;

  readonly user: NestedUser;

  readonly userId: string;

  readonly exchangedGift: NestedGift;

  readonly giftId: string;

  readonly createdAt: Date;

  readonly deliveredAt: Date | null;

  constructor(args: {
    id: string;
    isDelivered: boolean;
    user: NestedUser;
    userId: string;
    exchangedGift: NestedGift;
    giftId: string;
    createdAt: Date;
    deliveredAt: Date | null;
  }) {
    this.id = args.id;
    this.isDelivered = args.isDelivered;
    this.user = args.user;
    this.userId = args.userId;
    this.exchangedGift = args.exchangedGift;
    this.giftId = args.giftId;
    this.createdAt = args.createdAt;
    this.deliveredAt = args.deliveredAt;
  }
}
