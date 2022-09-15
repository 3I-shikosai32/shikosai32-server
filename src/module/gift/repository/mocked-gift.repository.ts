import { Injectable } from '@nestjs/common';
import { GiftInterface } from '../domain/service/model/gift.model';
import { GiftRepositoryInterface } from '../domain/service/repository/gift.repository';

@Injectable()
export class MockedGiftRepository implements GiftRepositoryInterface {
  async findUnique(): Promise<GiftInterface> {
    const foundGift = {
      id: 'abc-123',
      name: 'うまい棒',
      iconUrl: 'https://example.com',
      price: 10,
      remaining: 1,
      giftHistories: [],
      createdAt: new Date('2021-01-01T00:00:00.000Z'),
    };

    return foundGift;
  }

  async findMany(): Promise<GiftInterface[]> {
    const foundGifts = [
      {
        id: 'abc-123',
        name: 'うまい棒',
        iconUrl: 'https://example.com',
        price: 10,
        remaining: 1,
        giftHistories: [],
        createdAt: new Date('2021-01-01T00:00:00.000Z'),
      },
      {
        id: 'abc-456',
        name: 'うまい棒',
        iconUrl: 'https://example.com',
        price: 10,
        remaining: 1,
        giftHistories: [],
        createdAt: new Date('2021-01-01T00:00:00.000Z'),
      },
    ];

    return foundGifts;
  }

  async create(): Promise<GiftInterface> {
    const createdGift = {
      id: 'abc-123',
      name: 'うまい棒',
      iconUrl: 'https://example.com',
      price: 10,
      remaining: 1,
      giftHistories: [],
      createdAt: new Date('2021-01-01T00:00:00.000Z'),
    };

    return createdGift;
  }

  async update(): Promise<GiftInterface> {
    const updatedGift = {
      id: 'abc-123',
      name: 'うまい棒',
      iconUrl: 'https://example.com',
      price: 10,
      remaining: 1,
      giftHistories: [],
      createdAt: new Date('2021-01-01T00:00:00.000Z'),
    };

    return updatedGift;
  }

  async delete(): Promise<GiftInterface> {
    const deletedGift = {
      id: 'abc-123',
      name: 'うまい棒',
      iconUrl: 'https://example.com',
      price: 10,
      remaining: 1,
      giftHistories: [],
      createdAt: new Date('2021-01-01T00:00:00.000Z'),
    };

    return deletedGift;
  }
}
