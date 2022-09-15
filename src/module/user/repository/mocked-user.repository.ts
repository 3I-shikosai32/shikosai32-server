import { Injectable } from '@nestjs/common';
import { Character, Game, Role } from '@prisma/client';
import { UserInterface } from '../domain/service/model/user.model';
import { UserRepositoryInterface } from '../domain/service/repository/user.repository';

@Injectable()
export class MockedUserRepository implements UserRepositoryInterface {
  async findUnique(): Promise<UserInterface> {
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

  async findMany(): Promise<UserInterface[]> {
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

  async create(): Promise<UserInterface> {
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

  async update(): Promise<UserInterface> {
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

  async delete(): Promise<UserInterface> {
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
