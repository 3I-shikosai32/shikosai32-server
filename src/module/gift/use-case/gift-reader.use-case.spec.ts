import { Test } from '@nestjs/testing';
import { MockedGiftRepository } from '../repository/mocked-gift.repository';
import { GiftReaderUseCase } from './gift-reader.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';

describe('GiftReaderUseCase', () => {
  let mockedGiftRepository: MockedGiftRepository;
  let giftReaderUseCase: GiftReaderUseCase;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [{ provide: InjectionToken.GIFT_REPOSITORY, useClass: MockedGiftRepository }, GiftReaderUseCase],
    }).compile();

    mockedGiftRepository = moduleRef.get(InjectionToken.GIFT_REPOSITORY);
    giftReaderUseCase = moduleRef.get(GiftReaderUseCase);
  });

  test('findGift', async () => {
    const expectedGift = await mockedGiftRepository.findUnique();

    const foundGift = await giftReaderUseCase.findGift({ where: { id: expectedGift.id } });

    expect(foundGift).toEqual(expectedGift);
  });

  test('findGifts', async () => {
    const expectedGifts = await mockedGiftRepository.findMany();

    const foundGifts = await giftReaderUseCase.findGifts({ where: { name: { equals: expectedGifts[0].name } } });

    expect(foundGifts).toEqual(expectedGifts);
  });

  test('findGiftHistoriesByGiftId', async () => {
    const expectedGiftHistories = await mockedGiftRepository.findGiftHistoriesByGiftId();

    const foundGiftHistories = await giftReaderUseCase.findGiftHistoriesByGiftId(expectedGiftHistories[0].giftId);

    expect(foundGiftHistories).toEqual(expectedGiftHistories);
  });
});
