import { forwardRef, Module } from '@nestjs/common';
import { ItemResolver } from './controller/item.resolver';
import { ItemDataLoader } from './dataloader/item.dataloader';
import { ItemRepository } from './repository/item.repository';
import { InjectionToken } from '@/common/constant/injection-token.constant';
import { UserModule } from '~/user/user.module';

@Module({
  imports: [forwardRef(() => UserModule)],
  providers: [ItemDataLoader, { provide: InjectionToken.ITEM_REPOSITORY, useClass: ItemRepository }, ItemResolver],
  exports: [ItemDataLoader, { provide: InjectionToken.ITEM_REPOSITORY, useClass: ItemRepository }],
})
export class ItemModule {}
