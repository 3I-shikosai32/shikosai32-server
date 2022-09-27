import { Item } from '~/item/domain/model/item.model';

export class ObtainmentStatus {
  readonly item: Item;

  readonly obtained: boolean;

  constructor(args: { item: Item; obtained: boolean }) {
    this.item = args.item;
    this.obtained = args.obtained;
  }
}
