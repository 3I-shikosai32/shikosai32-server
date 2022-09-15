export interface NestedGiftHistoryInterface {
  id: string;
  isDelivered: boolean;
  userId: string;
  giftId: string;
  createdAt: Date;
  deliveredAt: Date | null;
}
