import { Character, Game, Gift, GiftHistory, Item, Role, User } from '@prisma/client';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import UserQuery from './user.resolver.query';
import UserService from './user.service';

describe('User Query Resolver Test', () => {
  let mockedUserService: DeepMockProxy<UserService>;
  let userQuery: UserQuery;

  type FindUniqueReturn = User & { items: (Item & { users: User[] })[]; giftHistories: (GiftHistory & { exchangedGift: Gift })[] };
  type FindManyReturn = (User & { items: (Item & { users: User[] })[]; giftHistories: (GiftHistory & { exchangedGift: Gift })[] })[];

  beforeEach(() => {
    mockedUserService = mockDeep<UserService>();
    userQuery = new UserQuery(mockedUserService);
  });

  test('findUser', async () => {
    const fakeUser: FindUniqueReturn = {
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
    mockedUserService.findUnique.mockResolvedValue(fakeUser);

    const expectUser = fakeUser;
    const result = userQuery.findUser({ where: { id: expectUser.id } });

    await expect(result).resolves.toEqual(expectUser);
  });

  test('findUsers', async () => {
    const fakeUser: FindManyReturn = [
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
    mockedUserService.findMany.mockResolvedValue(fakeUser);

    const expectUser = fakeUser;
    const result = userQuery.findUsers({ where: { name: { equals: expectUser[0].name } } });

    await expect(result).resolves.toEqual(expect.any(Array<typeof expectUser>));
  });
});
