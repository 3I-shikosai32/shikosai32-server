import { Injectable } from '@nestjs/common';
import { Character, Game, Role } from '@prisma/client';
import { CharacterStatus } from '../domain/model/character-status.model';
import { CharacterStatusRepositoryInterface } from '../domain/service/repository/character-status.repository';
import { User } from '~/user/domain/model/user.model';

@Injectable()
export class MockedCharacterStatusRepository implements CharacterStatusRepositoryInterface {
  async findUnique() {
    const foundCharacterStatus = {
      id: 'abc-123',
      character: Character.CAT,
      iconUrl: 'https://example.com',
      avatarUrl: 'https://example.com',
      characterPointDay1: 0,
      characterPointDay2: 0,
      userId: 'def-123',
      itemIds: [],
      itemCompletedHistory: {
        isDelivered: false,
        createdAt: new Date('2021-01-01T00:00:00.000Z'),
        deliveredAt: null,
      },
    };

    return new CharacterStatus(foundCharacterStatus);
  }

  async findMany() {
    const foundCharacterStatuss = [
      {
        id: 'abc-123',
        character: Character.CAT,
        iconUrl: 'https://example.com',
        avatarUrl: 'https://example.com',
        characterPointDay1: 0,
        characterPointDay2: 0,
        userId: 'def-123',
        itemIds: [],
        itemCompletedHistory: {
          isDelivered: false,
          createdAt: new Date('2021-01-01T00:00:00.000Z'),
          deliveredAt: null,
        },
      },
      {
        id: 'abc-456',
        character: Character.CAT,
        iconUrl: 'https://example.com',
        avatarUrl: 'https://example.com',
        characterPointDay1: 0,
        characterPointDay2: 0,
        userId: 'def-123',
        itemIds: [],
        itemCompletedHistory: {
          isDelivered: false,
          createdAt: new Date('2021-01-01T00:00:00.000Z'),
          deliveredAt: null,
        },
      },
    ];

    return foundCharacterStatuss.map((foundCharacterStatus) => new CharacterStatus(foundCharacterStatus));
  }

  async create() {
    const createdCharacterStatus = {
      id: 'abc-123',
      character: Character.CAT,
      iconUrl: 'https://example.com',
      avatarUrl: 'https://example.com',
      characterPointDay1: 0,
      characterPointDay2: 0,
      userId: 'def-123',
      itemIds: [],
      itemCompletedHistory: {
        isDelivered: false,
        createdAt: new Date('2021-01-01T00:00:00.000Z'),
        deliveredAt: null,
      },
    };

    return new CharacterStatus(createdCharacterStatus);
  }

  async update() {
    const updatedCharacterStatus = {
      id: 'abc-123',
      character: Character.CAT,
      iconUrl: 'https://example.com',
      avatarUrl: 'https://example.com',
      characterPointDay1: 0,
      characterPointDay2: 0,
      userId: 'def-123',
      itemIds: [],
      itemCompletedHistory: {
        isDelivered: false,
        createdAt: new Date('2021-01-01T00:00:00.000Z'),
        deliveredAt: null,
      },
    };

    return new CharacterStatus(updatedCharacterStatus);
  }

  async delete() {
    const deletedCharacterStatus = {
      id: 'abc-123',
      character: Character.CAT,
      iconUrl: 'https://example.com',
      avatarUrl: 'https://example.com',
      characterPointDay1: 0,
      characterPointDay2: 0,
      userId: 'def-123',
      itemIds: [],
      itemCompletedHistory: {
        isDelivered: false,
        createdAt: new Date('2021-01-01T00:00:00.000Z'),
        deliveredAt: null,
      },
    };

    return new CharacterStatus(deletedCharacterStatus);
  }

  async findManyWithUser(): Promise<[CharacterStatus, User][]> {
    const foundCharacterStatus = {
      id: 'abc-123',
      character: Character.CAT,
      iconUrl: 'https://example.com',
      avatarUrl: 'https://example.com',
      characterPointDay1: 0,
      characterPointDay2: 0,
      userId: 'def-123',
      itemIds: [],
      itemCompletedHistory: {
        isDelivered: false,
        createdAt: new Date('2021-01-01T00:00:00.000Z'),
        deliveredAt: null,
      },
    };
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

    return [[new CharacterStatus(foundCharacterStatus), new User(foundUser)]];
  }

  async findActiveByUserId() {
    const foundCharacterStatus = {
      id: 'abc-123',
      character: Character.CAT,
      iconUrl: 'https://example.com',
      avatarUrl: 'https://example.com',
      characterPointDay1: 0,
      characterPointDay2: 0,
      userId: 'def-123',
      itemIds: [],
      itemCompletedHistory: {
        isDelivered: false,
        createdAt: new Date('2021-01-01T00:00:00.000Z'),
        deliveredAt: null,
      },
    };

    return new CharacterStatus(foundCharacterStatus);
  }
}
