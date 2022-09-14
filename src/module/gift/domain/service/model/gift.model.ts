import { NestedGiftHistoryInterface } from '~/gift-history/domain/service/model/nested-gift-history.model';

export interface GiftInterface {
  readonly id: string;
  readonly name: string;
  readonly iconUrl: string;
  readonly price: number;
  readonly remaining: number;
  readonly giftHistories: NestedGiftHistoryInterface[];
  readonly createdAt: Date;
}
