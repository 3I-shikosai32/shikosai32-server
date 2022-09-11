import { Character, Game, Gift, GiftHistory, Role, User } from '@prisma/client';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import GiftHistoryQuery from './gift_history.resolver.query';
import GiftHistoryService from './gift_history.service';

describe('GiftHistory Query Resolver Test', () => {
  let mockedGiftHistoryService: DeepMockProxy<GiftHistoryService>;
  let giftHistoryQuery: GiftHistoryQuery;

  type GiftHistoryModel = GiftHistory & { user: User & { giftHistories: GiftHistory[] }; exchangedGift: Gift & { giftHistories: GiftHistory[] } };

  beforeEach(() => {
    mockedGiftHistoryService = mockDeep<GiftHistoryService>();
    giftHistoryQuery = new GiftHistoryQuery(mockedGiftHistoryService);
  });

  test('findGiftHistory', async () => {
    const findUniqueRes: GiftHistoryModel = {
      id: 'abc-123',
      isDelivered: false,
      user: {
        id: 'def-123',
        name: 'fake user',
        email: 'test@example.com',
        role: Role.USER,
        totalPointDay1: 10,
        totalPointDay2: 0,
        consumablePoint: 10,
        character: Character.CAT,
        iconUrl: 'https://example.com',
        avatarUrl: 'https://example.com',
        itemIds: [],
        participateGame: Game.NONE,
        pullableGachaTimes: 0,
        giftHistories: [],
        createdAt: new Date(),
      },
      userId: 'def-123',
      exchangedGift: {
        id: 'ghi-123',
        name: 'うまい棒',
        iconUrl: 'https://example.com',
        price: 10,
        remaining: 1,
        giftHistories: [],
        createdAt: new Date(),
      },
      giftId: 'ghi-123',
      createdAt: new Date(),
    };
    mockedGiftHistoryService.findUnique.mockResolvedValue(findUniqueRes);

    const foundGiftHistory = await giftHistoryQuery.findGiftHistory({ where: { id: findUniqueRes.id } });

    await expect(foundGiftHistory).toEqual(findUniqueRes);
  });

  test('findGiftHistories', async () => {
    const findManyRes: GiftHistoryModel[] = [
      {
        id: 'abc-123',
        isDelivered: false,
        user: {
          id: 'def-123',
          name: 'fake user',
          email: 'test@example.com',
          role: Role.USER,
          totalPointDay1: 10,
          totalPointDay2: 0,
          consumablePoint: 10,
          character: Character.CAT,
          iconUrl: 'https://example.com',
          avatarUrl: 'https://example.com',
          itemIds: [],
          participateGame: Game.NONE,
          pullableGachaTimes: 0,
          giftHistories: [],
          createdAt: new Date(),
        },
        userId: 'def-123',
        exchangedGift: {
          id: 'ghi-123',
          name: 'うまい棒',
          iconUrl: 'https://example.com',
          price: 10,
          remaining: 1,
          giftHistories: [],
          createdAt: new Date(),
        },
        giftId: 'ghi-123',
        createdAt: new Date(),
      },
      {
        id: 'abc-456',
        isDelivered: false,
        user: {
          id: 'def-456',
          name: 'fake user',
          email: 'test@example.com',
          role: Role.USER,
          totalPointDay1: 10,
          totalPointDay2: 0,
          consumablePoint: 10,
          character: Character.CAT,
          iconUrl: 'https://example.com',
          avatarUrl: 'https://example.com',
          itemIds: [],
          participateGame: Game.NONE,
          pullableGachaTimes: 0,
          giftHistories: [],
          createdAt: new Date(),
        },
        userId: 'def-456',
        exchangedGift: {
          id: 'ghi-456',
          name: 'うまい棒',
          iconUrl: 'https://example.com',
          price: 10,
          remaining: 1,
          giftHistories: [],
          createdAt: new Date(),
        },
        giftId: 'ghi-456',
        createdAt: new Date(),
      },
    ];
    mockedGiftHistoryService.findMany.mockResolvedValue(findManyRes);

    const foundGiftHistories = await giftHistoryQuery.findGiftHistories({ where: { isDelivered: { equals: findManyRes[0].isDelivered } } });

    await expect(foundGiftHistories).toEqual(findManyRes);
  });
});
