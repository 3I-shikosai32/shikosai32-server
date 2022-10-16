import { Injectable } from '@nestjs/common';
import { GiftHistory } from '../domain/model/gift-history.model';
import { GiftHistoryRepositoryInterface } from '../domain/service/repository/gift-history.repository';

@Injectable()
export class MockedGiftHistoryRepository implements GiftHistoryRepositoryInterface {
  async findUnique() {
    const foundGiftHistory = {
      id: 'abc-123',
      isDelivered: false,
      userId: 'def-123',
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
        userId: 'def-123',
        giftId: 'ghi-123',
        createdAt: new Date('2021-01-01T00:00:00.000Z'),
        deliveredAt: null,
      },
      {
        id: 'abc-456',
        isDelivered: false,
        userId: 'def-456',
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
      userId: 'def-123',
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
      userId: 'def-123',
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
      userId: 'def-123',
      giftId: 'ghi-123',
      createdAt: new Date('2021-01-01T00:00:00.000Z'),
      deliveredAt: null,
    };

    return new GiftHistory(deletedGiftHistory);
  }

  async createMany() {
    const createdGiftHistories = [
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
        isDelivered: false,
        userId: 'def-456',
        giftId: 'ghi-456',
        createdAt: new Date('2021-01-01T00:00:00.000Z'),
        deliveredAt: null,
      },
    ];

    return createdGiftHistories.map((createdGiftHistory) => new GiftHistory(createdGiftHistory));
  }
}
