import { NestedGiftHistory } from '~/gift-history/domain/model/nested-gift-history.model';

export class Gift {
  readonly id: string;

  readonly name: string;

  readonly iconUrl: string;

  readonly price: number;

  readonly remaining: number;

  readonly giftHistories: NestedGiftHistory[];

  readonly createdAt: Date;

  constructor(args: {
    id: string;
    name: string;
    iconUrl: string;
    price: number;
    remaining: number;
    giftHistories: NestedGiftHistory[];
    createdAt: Date;
  }) {
    this.id = args.id;
    this.name = args.name;
    this.iconUrl = args.iconUrl;
    this.price = args.price;
    this.remaining = args.remaining;
    this.giftHistories = args.giftHistories;
    this.createdAt = args.createdAt;
  }
}
