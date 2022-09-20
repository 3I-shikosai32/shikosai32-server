import { Module } from '@nestjs/common';
import { ItemRepository } from './repository/item.repository';
import { InjectionToken } from '@/common/constant/injection-token.constant';

@Module({
  providers: [{ provide: InjectionToken.ITEM_REPOSITORY, useClass: ItemRepository }],
  exports: [{ provide: InjectionToken.ITEM_REPOSITORY, useClass: ItemRepository }],
})
export class ItemModule {}
