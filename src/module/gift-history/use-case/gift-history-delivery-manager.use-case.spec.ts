import { Test } from '@nestjs/testing';
import { MockedGiftHistoryRepository } from '../repository/mocked-gift-history.repository';
import { GiftHistoryDeliveryManagerUseCase } from './gift-history-delivery-manager.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';

describe('GiftHistoryDeliveryManagerUseCase', () => {
  let mockedGiftHistoryRepository: MockedGiftHistoryRepository;
  let giftHistoryUpdaterUseCase: GiftHistoryDeliveryManagerUseCase;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [{ provide: InjectionToken.GIFT_HISTORY_REPOSITORY, useClass: MockedGiftHistoryRepository }, GiftHistoryDeliveryManagerUseCase],
    }).compile();

    mockedGiftHistoryRepository = moduleRef.get(InjectionToken.GIFT_HISTORY_REPOSITORY);
    giftHistoryUpdaterUseCase = moduleRef.get(GiftHistoryDeliveryManagerUseCase);
  });

  test('changeDeliveryState', async () => {
    const expectGiftHistory = await mockedGiftHistoryRepository.update();

    const updatedGiftHistory = await giftHistoryUpdaterUseCase.changeDeliveryState(expectGiftHistory.id, expectGiftHistory);

    expect(updatedGiftHistory).toEqual(expectGiftHistory);
  });
});
