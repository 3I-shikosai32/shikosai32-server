import { Module } from '@nestjs/common';
import { ItemCompletedHistoryRepository } from './repository/item-completed-history.repository';
import { InjectionToken } from '@/common/constant/injection-token.constant';

@Module({
  providers: [{ provide: InjectionToken.ITEM_COMPLETED_HISTORY_REPOSITORY, useClass: ItemCompletedHistoryRepository }],
  exports: [{ provide: InjectionToken.ITEM_COMPLETED_HISTORY_REPOSITORY, useClass: ItemCompletedHistoryRepository }],
})
export class ItemCompletedHistoryModule {}
