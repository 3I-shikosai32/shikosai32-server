import { Injectable } from '@nestjs/common';
import { Character, Game, Role } from '@prisma/client';
import { User } from '../domain/model/user.model';
import { UserRepositoryInterface } from '../domain/service/repository/user.repository';
import { GiftHistory } from '~/gift-history/domain/model/gift-history.model';
import { Item } from '~/item/domain/model/item.model';

@Injectable()
export class MockedUserRepository implements UserRepositoryInterface {
  async findUnique() {
    const foundUser = {
      id: 'abc-123',
      name: 'fake user',
      email: 'test@example.com',
      role: Role.USER,
      totalPointDay1: 0,
      totalPointDay2: 0,
      consumablePoint: 10,
      character: Character.CAT,
      iconUrl: 'https://example.com',
      avatarUrl: 'https://example.com',
      itemIds: [],
      participateGame: Game.NONE,
      pullableGachaTimes: 5,
      createdAt: new Date('2021-01-01T00:00:00.000Z'),
    };

    return new User(foundUser);
  }

  async findMany() {
    const foundUsers = [
      {
        id: 'abc-123',
        name: 'fake user',
        email: 'test@example.com',
        role: Role.USER,
        totalPointDay1: 0,
        totalPointDay2: 0,
        consumablePoint: 10,
        character: Character.CAT,
        iconUrl: 'https://example.com',
        avatarUrl: 'https://example.com',
        itemIds: [],
        participateGame: Game.NONE,
        pullableGachaTimes: 5,
        createdAt: new Date('2021-01-01T00:00:00.000Z'),
      },
      {
        id: 'abc-456',
        name: 'fake user',
        email: 'test@example.com',
        role: Role.USER,
        totalPointDay1: 0,
        totalPointDay2: 0,
        consumablePoint: 10,
        character: Character.CAT,
        iconUrl: 'https://example.com',
        avatarUrl: 'https://example.com',
        itemIds: [],
        participateGame: Game.NONE,
        pullableGachaTimes: 5,
        createdAt: new Date('2021-01-01T00:00:00.000Z'),
      },
    ];

    return foundUsers.map((foundUser) => new User(foundUser));
  }

  async create() {
    const createdUser = {
      id: 'abc-123',
      name: 'fake user',
      email: 'test@example.com',
      role: Role.USER,
      totalPointDay1: 0,
      totalPointDay2: 0,
      consumablePoint: 10,
      character: Character.CAT,
      iconUrl: 'https://example.com',
      avatarUrl: 'https://example.com',
      itemIds: [],
      participateGame: Game.NONE,
      pullableGachaTimes: 5,
      createdAt: new Date('2021-01-01T00:00:00.000Z'),
    };

    return new User(createdUser);
  }

  async update() {
    const updatedUser = {
      id: 'abc-123',
      name: 'fake user',
      email: 'test@example.com',
      role: Role.USER,
      totalPointDay1: 0,
      totalPointDay2: 0,
      consumablePoint: 10,
      character: Character.CAT,
      iconUrl: 'https://example.com',
      avatarUrl: 'https://example.com',
      itemIds: [],
      participateGame: Game.NONE,
      pullableGachaTimes: 5,
      createdAt: new Date('2021-01-01T00:00:00.000Z'),
    };

    return new User(updatedUser);
  }

  async delete() {
    const deletedUser = {
      id: 'abc-123',
      name: 'fake user',
      email: 'test@example.com',
      role: Role.USER,
      totalPointDay1: 0,
      totalPointDay2: 0,
      consumablePoint: 10,
      character: Character.CAT,
      iconUrl: 'https://example.com',
      avatarUrl: 'https://example.com',
      itemIds: [],
      participateGame: Game.NONE,
      pullableGachaTimes: 5,
      createdAt: new Date('2021-01-01T00:00:00.000Z'),
    };

    return new User(deletedUser);
  }

  async findUniqueWithItems(): Promise<[User, Item[]]> {
    const foundUserWithItems = {
      id: 'abc-123',
      name: 'fake user',
      email: 'test@example.com',
      role: Role.USER,
      totalPointDay1: 0,
      totalPointDay2: 0,
      consumablePoint: 10,
      character: Character.CAT,
      iconUrl: 'https://example.com',
      avatarUrl: 'https://example.com',
      itemIds: ['def-123', 'def-456'],
      items: [
        {
          id: 'def-123',
          url: 'https://example.com',
          character: Character.CAT,
          layer: 1,
          userIds: [],
        },
        {
          id: 'def-456',
          url: 'https://example.com',
          character: Character.CAT,
          layer: 1,
          userIds: [],
        },
      ],
      participateGame: Game.NONE,
      pullableGachaTimes: 5,
      createdAt: new Date('2021-01-01T00:00:00.000Z'),
    };

    return [new User(foundUserWithItems), foundUserWithItems.items.map((item) => new Item(item))];
  }

  async findItemsByUserId() {
    const foundItems = [
      {
        id: 'abc-123',
        url: 'https://example.com',
        character: Character.CAT,
        layer: 1,
        userIds: [],
      },
      {
        id: 'abc-456',
        url: 'https://example.com',
        character: Character.CAT,
        layer: 1,
        userIds: [],
      },
    ];

    return foundItems.map((foundItem) => new Item(foundItem));
  }

  async findGiftHistoriesByUserId() {
    const foundGiftHistories = [
      {
        id: 'abc-123',
        isDelivered: false,
        userId: 'def-123',
        giftId: 'ghi-123',
        createdAt: new Date('2021-01-01T00:00:00.000Z'),
        deliveredAt: null,
      },
      {
        id: 'abc-456',
        isDelivered: true,
        userId: 'def-123',
        giftId: 'ghi-456',
        createdAt: new Date('2021-01-01T00:00:00.000Z'),
        deliveredAt: new Date('2021-01-01T00:00:00.000Z'),
      },
    ];

    return foundGiftHistories.map((foundGiftHistory) => new GiftHistory(foundGiftHistory));
  }
}
