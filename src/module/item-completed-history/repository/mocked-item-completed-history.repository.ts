import { Injectable } from '@nestjs/common';
import { ItemCompletedHistory } from '../domain/model/item-completed-history.model';
import { ItemCompletedHistoryRepositoryInterface } from '../domain/service/repository/item-completed-history.repository';

@Injectable()
export class MockedItemCompletedHistoryRepository implements ItemCompletedHistoryRepositoryInterface {
  async findUnique() {
    const foundItemCompletedHistory = {
      id: 'abc-123',
      isDelivered: false,
      characterStatusId: 'def-123',
      createdAt: new Date('2021-01-01T00:00:00.000Z'),
      deliveredAt: null,
    };

    return new ItemCompletedHistory(foundItemCompletedHistory);
  }

  async findMany() {
    const foundItemCompletedHistories = [
      {
        id: 'abc-123',
        isDelivered: false,
        characterStatusId: 'def-123',
        createdAt: new Date('2021-01-01T00:00:00.000Z'),
        deliveredAt: null,
      },
      {
        id: 'abc-456',
        isDelivered: false,
        characterStatusId: 'def-456',
        giftId: 'ghi-456',
        createdAt: new Date('2021-01-01T00:00:00.000Z'),
        deliveredAt: null,
      },
    ];

    return foundItemCompletedHistories.map((foundItemCompletedHistory) => new ItemCompletedHistory(foundItemCompletedHistory));
  }

  async create() {
    const createdItemCompletedHistory = {
      id: 'abc-123',
      isDelivered: false,
      characterStatusId: 'def-123',
      createdAt: new Date('2021-01-01T00:00:00.000Z'),
      deliveredAt: null,
    };

    return new ItemCompletedHistory(createdItemCompletedHistory);
  }

  async update() {
    const updatedItemCompletedHistory = {
      id: 'abc-123',
      isDelivered: false,
      characterStatusId: 'def-123',
      createdAt: new Date('2021-01-01T00:00:00.000Z'),
      deliveredAt: null,
    };

    return new ItemCompletedHistory(updatedItemCompletedHistory);
  }

  async delete() {
    const deletedItemCompletedHistory = {
      id: 'abc-123',
      isDelivered: false,
      characterStatusId: 'def-123',
      createdAt: new Date('2021-01-01T00:00:00.000Z'),
      deliveredAt: null,
    };

    return new ItemCompletedHistory(deletedItemCompletedHistory);
  }
}
