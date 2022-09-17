import { Module } from '@nestjs/common';
import { ItemResolver } from './controller/item.resolver';
import { ItemRepository } from './repository/item.repository';
import { ItemReaderUseCase } from './use-case/item-reader.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';

@Module({
  providers: [
    { provide: InjectionToken.ITEM_REPOSITORY, useClass: ItemRepository },
    { provide: InjectionToken.ITEM_READER_USE_CASE, useClass: ItemReaderUseCase },
    ItemResolver,
  ],
  exports: [{ provide: InjectionToken.ITEM_REPOSITORY, useClass: ItemRepository }],
})
export class ItemModule {}
