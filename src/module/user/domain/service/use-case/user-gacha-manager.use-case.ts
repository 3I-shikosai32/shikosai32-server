import { Item } from '~/item/domain/model/item.model';

export interface UserGachaManagerUseCaseInterface {
  pullGacha(userId: string, pullItem: (items: Item[]) => Item): Promise<Item>;
}
