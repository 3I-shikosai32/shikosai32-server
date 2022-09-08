import { Character, Game, Gift, GiftHistory, Item, Role, User } from '@prisma/client';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import ItemService from '../item/item.service';
import UserMutation from './user.resolver.mutation';
import UserService from './user.service';
import FirebaseService from '@/libs/firebase/firebase.service';

describe('User Mutation Resolver Test', () => {
  let mockedUserService: DeepMockProxy<UserService>;
  let mockedItemService: DeepMockProxy<ItemService>;
  let mockedFirebaseService: DeepMockProxy<FirebaseService>;
  let userMutation: UserMutation;

  type UserFindUniqueReturn = User & { items: (Item & { users: User[] })[]; giftHistories: (GiftHistory & { exchangedGift: Gift })[] };
  type UserCreateReturn = User & { items: (Item & { users: User[] })[]; giftHistories: (GiftHistory & { exchangedGift: Gift })[] };
  type ItemFindManyReturn = (Item & { users: (User & { items: Item[] })[] })[];

  beforeEach(() => {
    mockedUserService = mockDeep<UserService>();
    mockedItemService = mockDeep<ItemService>();
    mockedFirebaseService = mockDeep<FirebaseService>();
    userMutation = new UserMutation(mockedUserService, mockedItemService, mockedFirebaseService);
  });

  test('createUser', async () => {
    const fakeItems: ItemFindManyReturn = [];
    mockedItemService.findMany.mockResolvedValue(fakeItems);

    const fakeUser: UserCreateReturn = {
      id: 'abc-123',
      name: 'fake user',
      email: 'test@example.com',
      role: Role.USER,
      totalPointDay1: 0,
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
    mockedUserService.create.mockResolvedValue(fakeUser);

    const expectUser = fakeUser;
    const result = userMutation.createUser({ data: expectUser });

    await expect(result).resolves.toEqual(expectUser);
  });

  test('pullGacha', async () => {
    const fakeUser: UserFindUniqueReturn = {
      id: 'abc-123',
      name: 'fake user',
      email: 'test@example.com',
      role: Role.USER,
      totalPointDay1: 0,
      totalPointDay2: 0,
      consumablePoint: 0,
      character: Character.CAT,
      iconUrl: 'https://example.com',
      avatarUrl: 'https://example.com',
      items: [
        {
          id: 'abc-123',
          url: 'https://example.com',
          character: Character.CAT,
          layer: 1,
          users: [],
          userIds: [],
        },
      ],
      itemIds: [],
      participateGame: Game.NONE,
      pullableGachaTimes: 1,
      giftHistories: [],
      createdAt: new Date(),
    };
    mockedUserService.findUnique.mockResolvedValue(fakeUser);

    const fakeItems: ItemFindManyReturn = [
      {
        id: 'def-123',
        url: 'https://example.com',
        character: Character.CAT,
        layer: 1,
        users: [],
        userIds: [],
      },
      {
        id: 'def-456',
        url: 'https://example.com',
        character: Character.CAT,
        layer: 1,
        users: [],
        userIds: [],
      },
    ];
    mockedItemService.findMany.mockResolvedValue(fakeItems);

    const expectItems = fakeItems;
    const result = userMutation.pullGacha({ where: { id: fakeUser.id } });

    await expect(result).resolves.toMatchObject(expectItems[0]);
  });
});
