import { Injectable } from '@nestjs/common';
import { NestedGiftHistoryInterface } from '../service/model/nested-gift-history.model';

@Injectable()
export class NestedGiftHistory implements NestedGiftHistoryInterface {
  id: string;

  isDelivered: boolean;

  userId: string;

  giftId: string;

  createdAt: Date;

  deliveredAt: Date | null;
}
