import { Module } from '@nestjs/common';
import { GiftHistoryMutation } from './controller/gift-history-mutation.resolver';
import { GiftHistoryQuery } from './controller/gift-history-query.resolver';
import { GiftHistoryResolver } from './controller/gift-history.resolver';
import { GiftHistoryRepository } from './repository/gift-history.repository';
import { GiftHistoryCreatorUseCase } from './use-case/gift-history-creator.use-case';
import { GiftHistoryReaderUseCase } from './use-case/gift-history-reader.use-case';
import { GiftHistoryUpdaterUseCase } from './use-case/gift-history-updater.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';
import { GiftModule } from '~/gift/gift.module';
import { UserModule } from '~/user/user.module';

@Module({
  imports: [UserModule, GiftModule],
  providers: [
    { provide: InjectionToken.GIFT_HISTORY_REPOSITORY, useClass: GiftHistoryRepository },
    { provide: InjectionToken.GIFT_HISTORY_READER_USE_CASE, useClass: GiftHistoryReaderUseCase },
    { provide: InjectionToken.GIFT_HISTORY_CREATOR_USE_CASE, useClass: GiftHistoryCreatorUseCase },
    { provide: InjectionToken.GIFT_HISTORY_UPDATER_USE_CASE, useClass: GiftHistoryUpdaterUseCase },
    GiftHistoryResolver,
    GiftHistoryQuery,
    GiftHistoryMutation,
  ],
  exports: [{ provide: InjectionToken.GIFT_HISTORY_REPOSITORY, useClass: GiftHistoryRepository }],
})
export class GiftHistoryModule {}
