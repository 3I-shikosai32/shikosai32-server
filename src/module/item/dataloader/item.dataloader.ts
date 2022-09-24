import { Inject, Injectable, Scope } from '@nestjs/common';
import { InjectionToken } from '@/common/constant/injection-token.constant';
import { BaseDataLoader } from '@/common/dataloader/base.dataloader';
import { Item } from '~/item/domain/model/item.model';
import { ItemRepositoryInterface } from '~/item/domain/service/repository/item.repository';

@Injectable({ scope: Scope.REQUEST })
export class ItemDataLoader extends BaseDataLoader<string, Item> {
  constructor(
    @Inject(InjectionToken.ITEM_REPOSITORY)
    private readonly itemRepository: ItemRepositoryInterface,
  ) {
    super();
  }

  protected async batchLoad(itemIds: string[]): Promise<(Item | Error)[]> {
    const items = await this.itemRepository.findMany({
      where: {
        id: { in: itemIds },
      },
    });

    const mappedItems = itemIds.map((itemId) => {
      const item = items.find((i) => i.id === itemId);

      return item || new Error(`Item with id ${itemId} not found`);
    });

    return mappedItems;
  }
}
