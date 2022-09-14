import { Injectable } from '@nestjs/common';
import { GiftInterface } from '../service/model/gift.model';
import { NestedGiftHistoryInterface } from '~/gift-history/domain/service/model/nested-gift-history.model';

@Injectable()
export class Gift implements GiftInterface {
  id: string;

  name: string;

  iconUrl: string;

  price: number;

  remaining: number;

  giftHistories: NestedGiftHistoryInterface[];

  createdAt: Date;
}
