import { Module } from '@nestjs/common';
import { GiftHistoryMutation } from './controller/gift-history-mutation.resolver';
import { GiftHistoryQuery } from './controller/gift-history-query.resolver';
import { GiftHistory } from './domain/model/gift-history.model';
import { NestedGiftHistory } from './domain/model/nested-gift-history.model';
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
    { provide: InjectionToken.GIFT_HISTORY, useClass: GiftHistory },
    { provide: InjectionToken.NESTED_GIFT_HISTORY, useClass: NestedGiftHistory },
    { provide: InjectionToken.GIFT_HISTORY_REPOSITORY, useClass: GiftHistoryRepository },
    { provide: InjectionToken.GIFT_HISTORY_READER_USE_CASE, useClass: GiftHistoryReaderUseCase },
    { provide: InjectionToken.GIFT_HISTORY_CREATOR_USE_CASE, useClass: GiftHistoryCreatorUseCase },
    { provide: InjectionToken.GIFT_HISTORY_UPDATER_USE_CASE, useClass: GiftHistoryUpdaterUseCase },
    GiftHistoryQuery,
    GiftHistoryMutation,
  ],
  exports: [
    { provide: InjectionToken.GIFT_HISTORY, useClass: GiftHistory },
    { provide: InjectionToken.NESTED_GIFT_HISTORY, useClass: NestedGiftHistory },
    { provide: InjectionToken.GIFT_HISTORY_REPOSITORY, useClass: GiftHistoryRepository },
  ],
})
export class GiftHistoryModule {}
