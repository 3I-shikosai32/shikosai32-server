import { Injectable } from '@nestjs/common';
import { GiftHistoryInterface } from '../service/model/gift-history.model';
import { NestedGiftInterface } from '~/gift/domain/service/model/nested-gift.model';
import { NestedUserInterface } from '~/user/domain/service/model/nested-user.model';

@Injectable()
export class GiftHistory implements GiftHistoryInterface {
  id: string;

  isDelivered: boolean;

  user: NestedUserInterface;

  userId: string;

  exchangedGift: NestedGiftInterface;

  giftId: string;

  createdAt: Date;

  deliveredAt: Date | null;
}
