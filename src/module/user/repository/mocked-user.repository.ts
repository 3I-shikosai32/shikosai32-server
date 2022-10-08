import { Injectable } from '@nestjs/common';
import { Character, Game, Role } from '@prisma/client';
import { User } from '../domain/model/user.model';
import { UserRepositoryInterface } from '../domain/service/repository/user.repository';
import { CharacterStatus } from '~/character-status/domain/model/character-status.model';
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

  async findUniqueWithRelations(): Promise<[User, CharacterStatus, Item[]] | null> {
    const foundUser = {
      id: 'abc-123',
      name: 'fake user',
      email: 'test@example.com',
      role: Role.USER,
      totalPointDay1: 0,
      totalPointDay2: 0,
      consumablePoint: 10,
      participateGame: Game.NONE,
      pullableGachaTimes: 5,
      createdAt: new Date('2021-01-01T00:00:00.000Z'),
    };

    const foundCharacterStatus = {
      id: 'def-123',
      character: Character.CAT,
      characterPointDay1: 0,
      characterPointDay2: 0,
      iconUrl: 'https://example.com',
      avatarUrl: 'https://example.com',
      userId: 'abc-123',
      itemIds: ['ghi-123', 'ghi-456'],
      itemCompletedHistory: {
        isDelivered: false,
        createdAt: new Date('2021-01-01T00:00:00.000Z'),
        deliveredAt: null,
      },
    };

    const foundItems = [
      {
        id: 'ghi-123',
        url: 'https://example.com',
        character: Character.CAT,
        layer: 1,
        characterStatusIds: ['def-123'],
      },
      {
        id: 'ghi-456',
        url: 'https://example.com',
        character: Character.CAT,
        layer: 2,
        characterStatusIds: ['def-123'],
      },
    ];

    return [new User(foundUser), new CharacterStatus(foundCharacterStatus), foundItems.map((foundItem) => new Item(foundItem))];
  }
}
