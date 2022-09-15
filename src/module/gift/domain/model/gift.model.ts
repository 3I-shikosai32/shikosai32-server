import { NestedGiftHistory } from '~/gift-history/domain/model/nested-gift-history.model';

export class Gift {
  id: string;

  name: string;

  iconUrl: string;

  price: number;

  remaining: number;

  giftHistories: NestedGiftHistory[];

  createdAt: Date;
}
