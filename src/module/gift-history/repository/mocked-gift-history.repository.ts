import { Injectable } from '@nestjs/common';
import { Character, Game, Role } from '@prisma/client';
import { GiftHistory } from '../domain/model/gift-history.model';
import { GiftHistoryRepositoryInterface } from '../domain/service/repository/gift-history.repository';

@Injectable()
export class MockedGiftHistoryRepository implements GiftHistoryRepositoryInterface {
  async findUnique() {
    const foundGiftHistory = {
      id: 'abc-123',
      isDelivered: false,
      user: {
        id: 'def-123',
        name: 'fake user',
        email: 'test@example.com',
        role: Role.USER,
        totalPointDay1: 10,
        totalPointDay2: 0,
        consumablePoint: 10,
        character: Character.CAT,
        iconUrl: 'https://example.com',
        avatarUrl: 'https://example.com',
        itemIds: [],
        participateGame: Game.NONE,
        pullableGachaTimes: 0,
        giftHistories: [],
        createdAt: new Date('2021-01-01T00:00:00.000Z'),
      },
      userId: 'def-123',
      exchangedGift: {
        id: 'ghi-123',
        name: 'うまい棒',
        iconUrl: 'https://example.com',
        price: 10,
        remaining: 1,
        giftHistories: [],
        createdAt: new Date('2021-01-01T00:00:00.000Z'),
      },
      giftId: 'ghi-123',
      createdAt: new Date('2021-01-01T00:00:00.000Z'),
      deliveredAt: null,
    };

    return new GiftHistory(foundGiftHistory);
  }

  async findMany() {
    const foundGiftHistories = [
      {
        id: 'abc-123',
        isDelivered: false,
        user: {
          id: 'def-123',
          name: 'fake user',
          email: 'test@example.com',
          role: Role.USER,
          totalPointDay1: 10,
          totalPointDay2: 0,
          consumablePoint: 10,
          character: Character.CAT,
          iconUrl: 'https://example.com',
          avatarUrl: 'https://example.com',
          itemIds: [],
          participateGame: Game.NONE,
          pullableGachaTimes: 0,
          giftHistories: [],
          createdAt: new Date('2021-01-01T00:00:00.000Z'),
        },
        userId: 'def-123',
        exchangedGift: {
          id: 'ghi-123',
          name: 'うまい棒',
          iconUrl: 'https://example.com',
          price: 10,
          remaining: 1,
          giftHistories: [],
          createdAt: new Date('2021-01-01T00:00:00.000Z'),
        },
        giftId: 'ghi-123',
        createdAt: new Date('2021-01-01T00:00:00.000Z'),
        deliveredAt: null,
      },
      {
        id: 'abc-456',
        isDelivered: false,
        user: {
          id: 'def-456',
          name: 'fake user',
          email: 'test@example.com',
          role: Role.USER,
          totalPointDay1: 10,
          totalPointDay2: 0,
          consumablePoint: 10,
          character: Character.CAT,
          iconUrl: 'https://example.com',
          avatarUrl: 'https://example.com',
          itemIds: [],
          participateGame: Game.NONE,
          pullableGachaTimes: 0,
          giftHistories: [],
          createdAt: new Date('2021-01-01T00:00:00.000Z'),
        },
        userId: 'def-456',
        exchangedGift: {
          id: 'ghi-456',
          name: 'うまい棒',
          iconUrl: 'https://example.com',
          price: 10,
          remaining: 1,
          giftHistories: [],
          createdAt: new Date('2021-01-01T00:00:00.000Z'),
        },
        giftId: 'ghi-456',
        createdAt: new Date('2021-01-01T00:00:00.000Z'),
        deliveredAt: null,
      },
    ];

    return foundGiftHistories.map((foundGiftHistory) => new GiftHistory(foundGiftHistory));
  }

  async create() {
    const createdGiftHistory = {
      id: 'abc-123',
      isDelivered: false,
      user: {
        id: 'def-123',
        name: 'fake user',
        email: 'test@example.com',
        role: Role.USER,
        totalPointDay1: 10,
        totalPointDay2: 0,
        consumablePoint: 10,
        character: Character.CAT,
        iconUrl: 'https://example.com',
        avatarUrl: 'https://example.com',
        itemIds: [],
        participateGame: Game.NONE,
        pullableGachaTimes: 0,
        giftHistories: [],
        createdAt: new Date('2021-01-01T00:00:00.000Z'),
      },
      userId: 'def-123',
      exchangedGift: {
        id: 'ghi-123',
        name: 'うまい棒',
        iconUrl: 'https://example.com',
        price: 10,
        remaining: 1,
        giftHistories: [],
        createdAt: new Date('2021-01-01T00:00:00.000Z'),
      },
      giftId: 'ghi-123',
      createdAt: new Date('2021-01-01T00:00:00.000Z'),
      deliveredAt: null,
    };

    return new GiftHistory(createdGiftHistory);
  }

  async update() {
    const updatedGiftHistory = {
      id: 'abc-123',
      isDelivered: false,
      user: {
        id: 'def-123',
        name: 'fake user',
        email: 'test@example.com',
        role: Role.USER,
        totalPointDay1: 10,
        totalPointDay2: 0,
        consumablePoint: 10,
        character: Character.CAT,
        iconUrl: 'https://example.com',
        avatarUrl: 'https://example.com',
        itemIds: [],
        participateGame: Game.NONE,
        pullableGachaTimes: 0,
        giftHistories: [],
        createdAt: new Date('2021-01-01T00:00:00.000Z'),
      },
      userId: 'def-123',
      exchangedGift: {
        id: 'ghi-123',
        name: 'うまい棒',
        iconUrl: 'https://example.com',
        price: 10,
        remaining: 1,
        giftHistories: [],
        createdAt: new Date('2021-01-01T00:00:00.000Z'),
      },
      giftId: 'ghi-123',
      createdAt: new Date('2021-01-01T00:00:00.000Z'),
      deliveredAt: null,
    };

    return new GiftHistory(updatedGiftHistory);
  }

  async delete() {
    const deletedGiftHistory = {
      id: 'abc-123',
      isDelivered: false,
      user: {
        id: 'def-123',
        name: 'fake user',
        email: 'test@example.com',
        role: Role.USER,
        totalPointDay1: 10,
        totalPointDay2: 0,
        consumablePoint: 10,
        character: Character.CAT,
        iconUrl: 'https://example.com',
        avatarUrl: 'https://example.com',
        itemIds: [],
        participateGame: Game.NONE,
        pullableGachaTimes: 0,
        giftHistories: [],
        createdAt: new Date('2021-01-01T00:00:00.000Z'),
      },
      userId: 'def-123',
      exchangedGift: {
        id: 'ghi-123',
        name: 'うまい棒',
        iconUrl: 'https://example.com',
        price: 10,
        remaining: 1,
        giftHistories: [],
        createdAt: new Date('2021-01-01T00:00:00.000Z'),
      },
      giftId: 'ghi-123',
      createdAt: new Date('2021-01-01T00:00:00.000Z'),
      deliveredAt: null,
    };

    return new GiftHistory(deletedGiftHistory);
  }
}
