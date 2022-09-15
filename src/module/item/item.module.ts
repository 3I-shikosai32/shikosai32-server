import { Module } from '@nestjs/common';
import { Item } from './domain/model/item.model';
import { NestedItem } from './domain/model/nested-item.model';
import { ItemRepository } from './repository/item.repository';
import { InjectionToken } from '@/common/constant/injection-token.constant';

@Module({
  providers: [
    { provide: InjectionToken.ITEM, useClass: Item },
    { provide: InjectionToken.NESTED_ITEM, useClass: NestedItem },
    { provide: InjectionToken.ITEM_REPOSITORY, useClass: ItemRepository },
  ],
  exports: [
    { provide: InjectionToken.ITEM, useClass: Item },
    { provide: InjectionToken.NESTED_ITEM, useClass: NestedItem },
    { provide: InjectionToken.ITEM_REPOSITORY, useClass: ItemRepository },
  ],
})
export class ItemModule {}
