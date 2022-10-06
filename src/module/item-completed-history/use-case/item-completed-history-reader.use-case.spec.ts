import { Test } from '@nestjs/testing';
import { MockedItemCompletedHistoryRepository } from '../repository/mocked-item-completed-history.repository';
import { ItemCompletedHistoryReaderUseCase } from './item-completed-history-reader.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';

describe('ItemCompletedHistoryReaderUseCase', () => {
  let mockedItemCompletedHistoryRepository: MockedItemCompletedHistoryRepository;
  let giftHistoryReaderUseCase: ItemCompletedHistoryReaderUseCase;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        { provide: InjectionToken.ITEM_COMPLETED_HISTORY_REPOSITORY, useClass: MockedItemCompletedHistoryRepository },
        ItemCompletedHistoryReaderUseCase,
      ],
    }).compile();

    mockedItemCompletedHistoryRepository = moduleRef.get(InjectionToken.ITEM_COMPLETED_HISTORY_REPOSITORY);
    giftHistoryReaderUseCase = moduleRef.get(ItemCompletedHistoryReaderUseCase);
  });

  test('findItemCompletedHistories', async () => {
    const expectItemCompletedHistories = await mockedItemCompletedHistoryRepository.findMany();

    const foundItemCompletedHistories = await giftHistoryReaderUseCase.findItemCompletedHistories({
      id: { equals: expectItemCompletedHistories[0].id },
    });

    expect(foundItemCompletedHistories).toEqual(expectItemCompletedHistories);
  });
});
