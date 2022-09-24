import { forwardRef, Module } from '@nestjs/common';
import { ItemResolver } from './controller/item.resolver';
import { ItemDataLoader } from './dataloader/item.dataloader';
import { ItemRepository } from './repository/item.repository';
import { ItemReaderUseCase } from './use-case/item-reader.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';
import { UserModule } from '~/user/user.module';

@Module({
  imports: [forwardRef(() => UserModule)],
  providers: [
    ItemDataLoader,
    { provide: InjectionToken.ITEM_REPOSITORY, useClass: ItemRepository },
    { provide: InjectionToken.ITEM_READER_USE_CASE, useClass: ItemReaderUseCase },
    ItemResolver,
  ],
  exports: [ItemDataLoader, { provide: InjectionToken.ITEM_REPOSITORY, useClass: ItemRepository }],
})
export class ItemModule {}
