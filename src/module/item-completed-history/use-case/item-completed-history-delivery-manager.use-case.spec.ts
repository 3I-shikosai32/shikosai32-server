import { Test } from '@nestjs/testing';
import { MockedItemCompletedHistoryRepository } from '../repository/mocked-item-completed-history.repository';
import { ItemCompletedHistoryDeliveryManagerUseCase } from './item-completed-history-delivery-manager.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';

describe('ItemCompletedHistoryDeliveryManagerUseCase', () => {
  let mockedItemCompletedHistoryRepository: MockedItemCompletedHistoryRepository;
  let itemCompletedHistoryDeliveryManagerUseCase: ItemCompletedHistoryDeliveryManagerUseCase;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        { provide: InjectionToken.ITEM_COMPLETED_HISTORY_REPOSITORY, useClass: MockedItemCompletedHistoryRepository },
        ItemCompletedHistoryDeliveryManagerUseCase,
      ],
    }).compile();

    mockedItemCompletedHistoryRepository = moduleRef.get(InjectionToken.ITEM_COMPLETED_HISTORY_REPOSITORY);
    itemCompletedHistoryDeliveryManagerUseCase = moduleRef.get(ItemCompletedHistoryDeliveryManagerUseCase);
  });

  test('updateItemCompletedHistory', async () => {
    const expectItemCompletedHistory = await mockedItemCompletedHistoryRepository.update();

    const updatedItemCompletedHistory = await itemCompletedHistoryDeliveryManagerUseCase.changeDeliveryStatus(
      expectItemCompletedHistory.id,
      expectItemCompletedHistory.isDelivered,
    );

    expect(updatedItemCompletedHistory).toEqual(expectItemCompletedHistory);
  });
});
