export class GiftHistory {
  readonly id: string;

  readonly isDelivered: boolean;

  readonly userId: string;

  readonly giftId: string;

  readonly createdAt: Date;

  readonly deliveredAt: Date | null;

  constructor(args: { id: string; isDelivered: boolean; userId: string; giftId: string; createdAt: Date; deliveredAt: Date | null }) {
    this.id = args.id;
    this.isDelivered = args.isDelivered;
    this.userId = args.userId;
    this.giftId = args.giftId;
    this.createdAt = args.createdAt;
    this.deliveredAt = args.deliveredAt;
  }
}
