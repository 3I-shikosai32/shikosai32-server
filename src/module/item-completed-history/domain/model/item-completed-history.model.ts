export class ItemCompletedHistory {
  readonly id: string;

  readonly isDelivered: boolean;

  readonly characterStatusId: string;

  readonly createdAt: Date;

  readonly deliveredAt: Date | null;

  constructor(args: { id: string; isDelivered: boolean; characterStatusId: string; createdAt: Date; deliveredAt: Date | null }) {
    this.id = args.id;
    this.isDelivered = args.isDelivered;
    this.characterStatusId = args.characterStatusId;
    this.createdAt = args.createdAt;
    this.deliveredAt = args.deliveredAt;
  }
}
