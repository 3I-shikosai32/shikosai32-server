import { Character, Game, Gift, GiftHistory, Item, Role, User } from '@prisma/client';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import ItemService from '../item/item.service';
import UserMutation from './user.resolver.mutation';
import UserService from './user.service';
import PubSubService from '@/libs/pubsub/pubsub.service';

describe('User Mutation Resolver Test', () => {
  let mockedUserService: DeepMockProxy<UserService>;
  let mockedItemService: DeepMockProxy<ItemService>;
  let mockedPubSubService: DeepMockProxy<PubSubService>;
  let userMutation: UserMutation;

  type UserModel = User & { items: (Item & { users: User[] })[]; giftHistories: (GiftHistory & { exchangedGift: Gift })[] };
  type ItemModel = Item & { users: (User & { items: Item[] })[] };

  beforeEach(() => {
    mockedUserService = mockDeep<UserService>();
    mockedItemService = mockDeep<ItemService>();
    mockedPubSubService = mockDeep<PubSubService>();
    userMutation = new UserMutation(mockedUserService, mockedItemService, mockedPubSubService);
  });

  test('createUser', async () => {
    const itemFindManyRes: ItemModel[] = [];
    mockedItemService.findMany.mockResolvedValue(itemFindManyRes);

    const userCreateRes: UserModel = {
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
    mockedUserService.create.mockResolvedValue(userCreateRes);

    const createdUser = await userMutation.createUser({ data: userCreateRes });

    await expect(createdUser).toEqual(userCreateRes);
  });

  test('updateUser', async () => {
    const updateRes: UserModel = {
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
    mockedUserService.update.mockResolvedValue(updateRes);

    const updatedUser = await userMutation.updateUser({ where: { id: updateRes.id }, data: updateRes });

    await expect(updatedUser).toEqual(updateRes);
  });

  test('incrementPoint', async () => {
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
      items: [],
      itemIds: [],
      participateGame: Game.NONE,
      pullableGachaTimes: 0,
      giftHistories: [],
      createdAt: new Date(),
    };
    mockedUserService.findUnique.mockResolvedValue(findUniqueRes);

    const updateRes: UserModel = {
      id: 'abc-123',
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
    mockedUserService.update.mockResolvedValue(updateRes);

    const incrementedUser = await userMutation.incrementPoint({ users: [{ id: updateRes.id, increment: 10 }] });

    await expect(incrementedUser).toEqual(expect.arrayContaining([updateRes]));
  });

  test('joinGame', async () => {
    const updateRes: UserModel = {
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
      participateGame: Game.COIN_DROPPING,
      pullableGachaTimes: 0,
      giftHistories: [],
      createdAt: new Date(),
    };
    mockedUserService.update.mockResolvedValue(updateRes);

    const updatedUser = await userMutation.joinGame({ where: { id: updateRes.id }, game: Game.COIN_DROPPING });

    await expect(updatedUser).toEqual(updateRes);
  });

  test('exitGame', async () => {
    const updateRes: UserModel = {
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
    mockedUserService.update.mockResolvedValue(updateRes);

    const updatedUser = await userMutation.exitGame({ where: { id: updateRes.id } });

    await expect(updatedUser).toEqual(updateRes);
  });

  test('pullGacha', async () => {
    const userFindUniqueRes: UserModel = {
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
    mockedUserService.findUnique.mockResolvedValue(userFindUniqueRes);

    const itemFindManyRes: ItemModel[] = [
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
    mockedItemService.findMany.mockResolvedValue(itemFindManyRes);

    const pulledItem = await userMutation.pullGacha({ where: { id: userFindUniqueRes.id } });

    const expectItem = {
      id: expect.any(String),
      url: expect.any(String),
      character: Character.CAT,
      layer: expect.any(Number),
      users: expect.any(Array<User>),
      userIds: expect.any(Array<string>),
    };
    await expect(pulledItem).toEqual(expectItem);
  });
});
