import { Test } from '@nestjs/testing';
import { MockedGiftHistoryRepository } from '../repository/mocked-gift-history.repository';
import { GiftHistoryReaderUseCase } from './gift-history-reader.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';

describe('GiftHistoryReaderUseCase', () => {
  let mockedGiftHistoryRepository: MockedGiftHistoryRepository;
  let giftHistoryReaderUseCase: GiftHistoryReaderUseCase;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [{ provide: InjectionToken.GIFT_HISTORY_REPOSITORY, useClass: MockedGiftHistoryRepository }, GiftHistoryReaderUseCase],
    }).compile();

    mockedGiftHistoryRepository = moduleRef.get(InjectionToken.GIFT_HISTORY_REPOSITORY);
    giftHistoryReaderUseCase = moduleRef.get(GiftHistoryReaderUseCase);
  });

  test('findGiftHistory', async () => {
    const expectGiftHistory = await mockedGiftHistoryRepository.findUnique();

    const foundGiftHistory = await giftHistoryReaderUseCase.findGiftHistory(expectGiftHistory.id);

    expect(foundGiftHistory).toEqual(expectGiftHistory);
  });

  test('findGiftHistories', async () => {
    const expectGiftHistories = await mockedGiftHistoryRepository.findMany();

    const foundGiftHistories = await giftHistoryReaderUseCase.findGiftHistories({ id: { equals: expectGiftHistories[0].id } });

    expect(foundGiftHistories).toEqual(expectGiftHistories);
  });

  test('findUserByGiftHistoryId', async () => {
    const expectUser = await mockedGiftHistoryRepository.findUserByGiftHistoryId();

    const foundGiftHistory = await mockedGiftHistoryRepository.findUnique();
    const foundUser = await giftHistoryReaderUseCase.findUserByGiftHistoryId(foundGiftHistory.id);

    expect(foundUser).toEqual(expectUser);
  });

  test('findGiftByGiftHistoryId', async () => {
    const expectGift = await mockedGiftHistoryRepository.findGiftByGiftHistoryId();

    const foundGiftHistory = await mockedGiftHistoryRepository.findUnique();
    const foundGift = await giftHistoryReaderUseCase.findGiftByGiftHistoryId(foundGiftHistory.id);

    expect(foundGift).toEqual(expectGift);
  });
});
