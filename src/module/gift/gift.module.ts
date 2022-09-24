import { forwardRef, Module } from '@nestjs/common';
import { GiftQuery } from './controller/gift-query.resolver';
import { GiftResolver } from './controller/gift.resolver';
import { GiftDataLoader } from './dataloader/gift.dataloader';
import { GiftRepository } from './repository/gift.repository';
import { GiftReaderUseCase } from './use-case/gift-reader.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';
import { GiftHistoryModule } from '~/gift-history/gift-history.module';
import { GiftGiftHistoriesDataLoader } from '~/gift/dataloader/gift-gift-histories.dataloader';

@Module({
  imports: [forwardRef(() => GiftHistoryModule)],
  providers: [
    GiftDataLoader,
    GiftGiftHistoriesDataLoader,
    { provide: InjectionToken.GIFT_REPOSITORY, useClass: GiftRepository },
    { provide: InjectionToken.GIFT_READER_USE_CASE, useClass: GiftReaderUseCase },
    GiftResolver,
    GiftQuery,
  ],
  exports: [GiftDataLoader, GiftGiftHistoriesDataLoader, { provide: InjectionToken.GIFT_REPOSITORY, useClass: GiftRepository }],
})
export class GiftModule {}
