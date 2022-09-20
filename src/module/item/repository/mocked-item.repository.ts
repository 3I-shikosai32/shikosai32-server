import { Injectable } from '@nestjs/common';
import { Character, Game, Role } from '@prisma/client';
import { Item } from '../domain/model/item.model';
import { ItemRepositoryInterface } from '../domain/service/repository/item.repository';
import { User } from '~/user/domain/model/user.model';

@Injectable()
export class MockedItemRepository implements ItemRepositoryInterface {
  async findUnique() {
    const foundItem = {
      id: 'def-123',
      url: 'https://example.com',
      character: Character.CAT,
      layer: 1,
      userIds: [],
    };

    return new Item(foundItem);
  }

  async findMany() {
    const foundItems = [
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
    ];

    return foundItems.map((foundItem) => new Item(foundItem));
  }

  async create() {
    const createdItem = {
      id: 'def-123',
      url: 'https://example.com',
      character: Character.CAT,
      layer: 1,
      userIds: [],
    };

    return new Item(createdItem);
  }

  async update() {
    const updatedItem = {
      id: 'def-123',
      url: 'https://example.com',
      character: Character.CAT,
      layer: 1,
      userIds: [],
    };

    return new Item(updatedItem);
  }

  async delete() {
    const deleteItem = {
      id: 'def-123',
      url: 'https://example.com',
      character: Character.CAT,
      layer: 1,
      userIds: [],
    };

    return new Item(deleteItem);
  }

  async findUsersByItemId() {
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
}
