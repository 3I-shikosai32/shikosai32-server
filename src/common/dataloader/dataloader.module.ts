import { Module } from '@nestjs/common';
import { DataLoaderService } from './dataloader.service';
import { Loaders } from './loaders';
import { GiftHistoryModule } from '~/gift-history/gift-history.module';
import { UserModule } from '~/user/user.module';

@Module({
  imports: [UserModule, GiftHistoryModule],
  providers: [DataLoaderService, ...Loaders],
  exports: [DataLoaderService, ...Loaders],
})
export class DataLoaderModule {}
