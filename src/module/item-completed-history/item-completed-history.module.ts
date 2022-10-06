import { Module } from '@nestjs/common';
import { ItemCompletedHistoryQuery } from './controller/item-completed-history-query.resolver';
import { ItemCompletedHistoryRepository } from './repository/item-completed-history.repository';
import { ItemCompletedHistoryReaderUseCase } from './use-case/item-completed-history-reader.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';

@Module({
  providers: [
    { provide: InjectionToken.ITEM_COMPLETED_HISTORY_REPOSITORY, useClass: ItemCompletedHistoryRepository },
    { provide: InjectionToken.ITEM_COMPLETED_HISTORY_READER_USE_CASE, useClass: ItemCompletedHistoryReaderUseCase },
    ItemCompletedHistoryQuery,
  ],
  exports: [{ provide: InjectionToken.ITEM_COMPLETED_HISTORY_REPOSITORY, useClass: ItemCompletedHistoryRepository }],
})
export class ItemCompletedHistoryModule {}
