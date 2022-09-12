import { Character, Game, Gift, GiftHistory, Item, Role, User } from '@prisma/client';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import GiftService from '../gift/gift.service';
import UserService from '../user/user.service';
import GiftHistoryMutation from './gift_history.resolver.mutation';
import GiftHistoryService from './gift_history.service';

describe('GiftHistory Mutation Resolver Test', () => {
  let mockedUserService: DeepMockProxy<UserService>;
  let mockedGiftService: DeepMockProxy<GiftService>;
  let mockedGiftHistoryService: DeepMockProxy<GiftHistoryService>;
  let giftHistoryMutation: GiftHistoryMutation;

  type UserModel = User & { items: (Item & { users: User[] })[]; giftHistories: (GiftHistory & { exchangedGift: Gift })[] };
  type GiftModel = Gift & { giftHistories: (GiftHistory & { user: User })[] };
  type GiftHistoryModel = GiftHistory & { user: User & { giftHistories: GiftHistory[] }; exchangedGift: Gift & { giftHistories: GiftHistory[] } };

  beforeEach(() => {
    mockedUserService = mockDeep<UserService>();
    mockedGiftService = mockDeep<GiftService>();
    mockedGiftHistoryService = mockDeep<GiftHistoryService>();
    giftHistoryMutation = new GiftHistoryMutation(mockedGiftHistoryService, mockedUserService, mockedGiftService);
  });

  test('updateGiftHistory', async () => {
    const updateRes: GiftHistoryModel = {
      id: 'abc-123',
      isDelivered: false,
      user: {
        id: 'def-123',
        name: 'fake user',
        email: 'test@example.com',
        role: Role.USER,
        totalPointDay1: 10,
        totalPointDay2: 0,
        consumablePoint: 0,
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
      deliveredAt: null,
    };
    mockedGiftHistoryService.update.mockResolvedValue(updateRes);

    const updatedGiftHistory = await giftHistoryMutation.updateGiftHistory({ where: { id: updateRes.id }, data: updateRes });

    await expect(updatedGiftHistory).toEqual(updateRes);
  });

  test('exchangeGift', async () => {
    const giftFindUniqueRes: GiftModel = {
      id: 'abc-123',
      name: 'うまい棒',
      iconUrl: 'https://example.com',
      price: 10,
      remaining: 1,
      giftHistories: [],
      createdAt: new Date(),
    };
    mockedGiftService.findUnique.mockResolvedValue(giftFindUniqueRes);

    const userFindUniqueRes: UserModel = {
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
      items: [],
      itemIds: [],
      participateGame: Game.NONE,
      pullableGachaTimes: 0,
      giftHistories: [],
      createdAt: new Date(),
    };
    mockedUserService.findUnique.mockResolvedValue(userFindUniqueRes);

    const userUpdateRes: UserModel = {
      id: 'def-123',
      name: 'fake user',
      email: 'test@example.com',
      role: Role.USER,
      totalPointDay1: 10,
      totalPointDay2: 0,
      consumablePoint: 0,
      character: Character.CAT,
      iconUrl: 'https://example.com',
      avatarUrl: 'https://example.com',
      items: [],
      itemIds: [],
      participateGame: Game.NONE,
      pullableGachaTimes: 0,
      giftHistories: [],
      createdAt: new Date(),
    };
    mockedUserService.update.mockResolvedValue(userUpdateRes);

    const giftHistoryCreateRes: GiftHistoryModel = {
      id: 'def-123',
      isDelivered: false,
      user: userUpdateRes,
      userId: 'def-123',
      exchangedGift: giftFindUniqueRes,
      giftId: 'abc-123',
      createdAt: new Date(),
      deliveredAt: null,
    };
    mockedGiftHistoryService.create.mockResolvedValue(giftHistoryCreateRes);

    const createdGiftHistories = await giftHistoryMutation.exchangeGift({
      data: { isDelivered: false, userId: userFindUniqueRes.id, giftId: giftFindUniqueRes.id },
      exchangeQuantity: 1,
    });

    await expect(createdGiftHistories).toEqual(expect.arrayContaining([giftHistoryCreateRes]));
  });
});
