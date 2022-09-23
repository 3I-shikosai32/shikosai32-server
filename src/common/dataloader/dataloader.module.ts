import { Module } from '@nestjs/common';
import { DataLoaderService } from './dataloader.service';
import { Loaders } from './loaders';
import { GiftHistoryModule } from '~/gift-history/gift-history.module';
import { GiftModule } from '~/gift/gift.module';
import { ItemModule } from '~/item/item.module';
import { UserModule } from '~/user/user.module';

@Module({
  imports: [UserModule, ItemModule, GiftModule, GiftHistoryModule],
  providers: [DataLoaderService, ...Loaders],
  exports: [DataLoaderService, ...Loaders],
})
export class DataLoaderModule {}
