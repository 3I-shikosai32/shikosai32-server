import { Character, Game, Gift, GiftHistory, Item, Role, User } from '@prisma/client';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import UserQuery from './user.resolver.query';
import UserService from './user.service';

describe('User Query Resolver Test', () => {
  let mockedUserService: DeepMockProxy<UserService>;
  let userQuery: UserQuery;

  type UserModel = User & { items: (Item & { users: User[] })[]; giftHistories: (GiftHistory & { exchangedGift: Gift })[] };

  beforeEach(() => {
    mockedUserService = mockDeep<UserService>();
    userQuery = new UserQuery(mockedUserService);
  });

  test('findUser', async () => {
    const findUniqueRes: UserModel = {
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
      pullableGachaTimes: 0,
      giftHistories: [],
      createdAt: new Date(),
    };
    mockedUserService.findUnique.mockResolvedValue(findUniqueRes);

    const foundUser = await userQuery.findUser({ where: { id: findUniqueRes.id } });

    await expect(foundUser).toEqual(findUniqueRes);
  });

  test('findUsers', async () => {
    const findManyRes: UserModel[] = [
      {
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
        pullableGachaTimes: 0,
        giftHistories: [],
        createdAt: new Date(),
      },
      {
        id: 'abc-456',
        name: '_fake user',
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
        pullableGachaTimes: 0,
        giftHistories: [],
        createdAt: new Date(),
      },
    ];
    mockedUserService.findMany.mockResolvedValue(findManyRes);

    const foundUsers = await userQuery.findUsers({ where: { name: { equals: findManyRes[0].name } } });

    await expect(foundUsers).toEqual(expect.any(Array<typeof findManyRes[0]>));
  });
});
