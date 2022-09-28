import { Test } from '@nestjs/testing';
import { MockedGiftHistoryRepository } from '../repository/mocked-gift-history.repository';
import { GiftHistoryCreatorUseCase } from './gift-history-creator.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';
import { MockedGiftRepository } from '~/gift/repository/mocked-gift.repository';
import { MockedUserRepository } from '~/user/repository/mocked-user.repository';

describe('GiftHistoryCreatorUseCase', () => {
  let mockedUserRepository: MockedUserRepository;
  let mockedGiftRepository: MockedGiftRepository;
  let mockedGiftHistoryRepository: MockedGiftHistoryRepository;
  let giftHistoryCreatorUseCase: GiftHistoryCreatorUseCase;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        { provide: InjectionToken.USER_REPOSITORY, useClass: MockedUserRepository },
        { provide: InjectionToken.GIFT_REPOSITORY, useClass: MockedGiftRepository },
        { provide: InjectionToken.GIFT_HISTORY_REPOSITORY, useClass: MockedGiftHistoryRepository },
        GiftHistoryCreatorUseCase,
      ],
    }).compile();

    mockedUserRepository = moduleRef.get(InjectionToken.USER_REPOSITORY);
    mockedGiftRepository = moduleRef.get(InjectionToken.GIFT_REPOSITORY);
    mockedGiftHistoryRepository = moduleRef.get(InjectionToken.GIFT_HISTORY_REPOSITORY);
    giftHistoryCreatorUseCase = moduleRef.get(GiftHistoryCreatorUseCase);
  });

  test('exchangeGift', async () => {
    const foundUser = await mockedUserRepository.findUnique();
    const foundGift = await mockedGiftRepository.findUnique();
    const expectGiftHistory = await mockedGiftHistoryRepository.create();

    const createdGiftHistories = await giftHistoryCreatorUseCase.exchangeGift({ isDelivered: false, userId: foundUser.id, giftId: foundGift.id }, 1);

    expect(createdGiftHistories).toEqual(expect.arrayContaining([expectGiftHistory]));
  });
});
