export class ItemCompletedHistory {
  readonly isDelivered: boolean;

  readonly createdAt: Date;

  readonly deliveredAt: Date | null;

  constructor(args: { isDelivered: boolean; createdAt: Date; deliveredAt: Date | null }) {
    this.isDelivered = args.isDelivered;
    this.createdAt = args.createdAt;
    this.deliveredAt = args.deliveredAt;
  }
}
