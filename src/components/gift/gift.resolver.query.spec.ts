import { Gift, GiftHistory, GiftName, User } from '@prisma/client';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import GiftQuery from './gift.resolver.query';
import GiftService from './gift.service';

describe('Gift Query Resolver Test', () => {
  let mockedGiftService: DeepMockProxy<GiftService>;
  let giftQuery: GiftQuery;

  type GiftModel = Gift & { giftHistories: (GiftHistory & { user: User })[] };

  beforeEach(() => {
    mockedGiftService = mockDeep<GiftService>();
    giftQuery = new GiftQuery(mockedGiftService);
  });

  test('findGift', async () => {
    const findManyRes: GiftModel[] = [
      {
        id: 'abc-123',
        name: GiftName.BABY_STAR,
        iconUrl: 'https://example.com',
        price: 10,
        remaining: 1,
        giftHistories: [],
        createdAt: new Date(),
      },
      {
        id: 'abc-456',
        name: GiftName.BABY_STAR,
        iconUrl: 'https://example.com',
        price: 10,
        remaining: 1,
        giftHistories: [],
        createdAt: new Date(),
      },
    ];
    mockedGiftService.findMany.mockResolvedValue(findManyRes);

    const foundGifts = await giftQuery.findGifts({ where: { name: { equals: findManyRes[0].name } } });

    await expect(foundGifts).toEqual(expect.any(Array<typeof findManyRes[0]>));
  });
});
