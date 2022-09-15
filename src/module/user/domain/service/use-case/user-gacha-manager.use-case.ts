import { ItemInterface } from '~/item/domain/service/model/item.model';
import { PullGachaArgs } from '~/user/controller/dto/args/pull-gacha.args';

export interface UserGachaManagerUseCaseInterface {
  pullGacha(args: PullGachaArgs, pullItem: (items: ItemInterface[]) => ItemInterface): Promise<ItemInterface>;
}
