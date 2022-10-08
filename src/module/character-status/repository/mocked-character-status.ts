import { Injectable } from '@nestjs/common';
import { Character } from '@prisma/client';
import { CharacterStatus } from '../domain/model/character-status.model';
import { CharacterStatusRepositoryInterface } from '../domain/service/repository/character-status.repository';

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
