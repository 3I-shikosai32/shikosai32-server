import { Item } from '~/item/domain/model/item.model';
import { PullGachaArgs } from '~/user/controller/dto/args/pull-gacha.args';

export interface UserGachaManagerUseCaseInterface {
  pullGacha(args: PullGachaArgs, pullItem: (items: Item[]) => Item): Promise<Item>;
}
