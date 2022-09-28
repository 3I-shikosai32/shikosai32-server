import { Test } from '@nestjs/testing';
import { MockedGiftHistoryRepository } from '../repository/mocked-gift-history.repository';
import { GiftHistoryUpdaterUseCase } from './gift-history-updater.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';

describe('GiftHistoryUpdaterUseCase', () => {
  let mockedGiftHistoryRepository: MockedGiftHistoryRepository;
  let giftHistoryUpdaterUseCase: GiftHistoryUpdaterUseCase;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [{ provide: InjectionToken.GIFT_HISTORY_REPOSITORY, useClass: MockedGiftHistoryRepository }, GiftHistoryUpdaterUseCase],
    }).compile();

    mockedGiftHistoryRepository = moduleRef.get(InjectionToken.GIFT_HISTORY_REPOSITORY);
    giftHistoryUpdaterUseCase = moduleRef.get(GiftHistoryUpdaterUseCase);
  });

  test('updateGiftHistory', async () => {
    const expectGiftHistory = await mockedGiftHistoryRepository.update();

    const updatedGiftHistory = await giftHistoryUpdaterUseCase.updateGiftHistory(expectGiftHistory.id, expectGiftHistory);

    expect(updatedGiftHistory).toEqual(expectGiftHistory);
  });
});
