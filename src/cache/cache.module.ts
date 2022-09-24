import { Global, Module } from '@nestjs/common';
import { DataLoaderCacheService } from './dataloader-cache.service';

@Global()
@Module({
  providers: [DataLoaderCacheService],
  exports: [DataLoaderCacheService],
})
export class CacheModule {}
