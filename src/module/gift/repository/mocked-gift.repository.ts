import { Injectable } from '@nestjs/common';
import { Gift } from '../domain/model/gift.model';
import { GiftRepositoryInterface } from '../domain/service/repository/gift.repository';

@Injectable()
export class MockedGiftRepository implements GiftRepositoryInterface {
  async findUnique(): Promise<Gift> {
    const foundGift = {
      id: 'abc-123',
      name: 'うまい棒',
      iconUrl: 'https://example.com',
      price: 10,
      remaining: 1,
      giftHistories: [],
      createdAt: new Date('2021-01-01T00:00:00.000Z'),
    };

    return new Gift(foundGift);
  }

  async findMany(): Promise<Gift[]> {
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

    return foundGifts.map((foundGift) => new Gift(foundGift));
  }

  async create(): Promise<Gift> {
    const createdGift = {
      id: 'abc-123',
      name: 'うまい棒',
      iconUrl: 'https://example.com',
      price: 10,
      remaining: 1,
      giftHistories: [],
      createdAt: new Date('2021-01-01T00:00:00.000Z'),
    };

    return new Gift(createdGift);
  }

  async update(): Promise<Gift> {
    const updatedGift = {
      id: 'abc-123',
      name: 'うまい棒',
      iconUrl: 'https://example.com',
      price: 10,
      remaining: 1,
      giftHistories: [],
      createdAt: new Date('2021-01-01T00:00:00.000Z'),
    };

    return new Gift(updatedGift);
  }

  async delete(): Promise<Gift> {
    const deletedGift = {
      id: 'abc-123',
      name: 'うまい棒',
      iconUrl: 'https://example.com',
      price: 10,
      remaining: 1,
      giftHistories: [],
      createdAt: new Date('2021-01-01T00:00:00.000Z'),
    };

    return new Gift(deletedGift);
  }
}
