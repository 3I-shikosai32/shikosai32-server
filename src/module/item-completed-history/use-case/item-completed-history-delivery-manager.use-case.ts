import { Inject, Injectable } from '@nestjs/common';
import { ItemCompletedHistoryRepositoryInterface } from '../domain/service/repository/item-completed-history.repository';
import { ItemCompletedHistoryDeliveryManagerUseCaseInterface } from '../domain/service/use-case/item-completed-history-delivery-manager.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';

@Injectable()
export class ItemCompletedHistoryDeliveryManagerUseCase implements ItemCompletedHistoryDeliveryManagerUseCaseInterface {
  constructor(
    @Inject(InjectionToken.ITEM_COMPLETED_HISTORY_REPOSITORY)
    private readonly itemCompletedHistoryRepository: ItemCompletedHistoryRepositoryInterface,
  ) {}

  async changeDeliveryStatus(itemCompletedHistoryId: string, isDelivered: boolean) {
    const updateItemCompletedHistory = await this.itemCompletedHistoryRepository.update({
      where: { id: itemCompletedHistoryId },
      data: {
        isDelivered,
        deliveredAt: new Date(),
      },
    });

    return updateItemCompletedHistory;
  }
}
