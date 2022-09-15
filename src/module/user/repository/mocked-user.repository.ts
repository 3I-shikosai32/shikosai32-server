import { Injectable } from '@nestjs/common';
import { Character, Game, Role } from '@prisma/client';
import { User } from '../domain/model/user.model';
import { UserRepositoryInterface } from '../domain/service/repository/user.repository';

@Injectable()
export class MockedUserRepository implements UserRepositoryInterface {
  async findUnique(): Promise<User> {
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
      items: [],
      itemIds: [],
      participateGame: Game.NONE,
      pullableGachaTimes: 5,
      giftHistories: [],
      createdAt: new Date('2021-01-01T00:00:00.000Z'),
    };

    return foundUser;
  }

  async findMany(): Promise<User[]> {
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
        pullableGachaTimes: 5,
        giftHistories: [],
        createdAt: new Date('2021-01-01T00:00:00.000Z'),
      },
      {
        id: 'abc-456',
        name: '_fake user',
        email: 'test@example.com',
        role: Role.USER,
        totalPointDay1: 0,
        totalPointDay2: 0,
        consumablePoint: 10,
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
        pullableGachaTimes: 5,
        giftHistories: [],
        createdAt: new Date('2021-01-01T00:00:00.000Z'),
      },
    ];

    return foundUsers;
  }

  async create(): Promise<User> {
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
      items: [],
      itemIds: [],
      participateGame: Game.NONE,
      pullableGachaTimes: 5,
      giftHistories: [],
      createdAt: new Date('2021-01-01T00:00:00.000Z'),
    };

    return createdUser;
  }

  async update(): Promise<User> {
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
      items: [],
      itemIds: [],
      participateGame: Game.NONE,
      pullableGachaTimes: 5,
      giftHistories: [],
      createdAt: new Date('2021-01-01T00:00:00.000Z'),
    };

    return updatedUser;
  }

  async delete(): Promise<User> {
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
      items: [],
      itemIds: [],
      participateGame: Game.NONE,
      pullableGachaTimes: 5,
      giftHistories: [],
      createdAt: new Date('2021-01-01T00:00:00.000Z'),
    };

    return deletedUser;
  }
}
