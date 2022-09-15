import { Injectable } from '@nestjs/common';
import { Character } from '@prisma/client';
import { Item } from '../domain/model/item.model';
import { ItemRepositoryInterface } from '../domain/service/repository/item.repository';

@Injectable()
export class MockedItemRepository implements ItemRepositoryInterface {
  async findUnique(): Promise<Item> {
    const foundItem = {
      id: 'def-123',
      url: 'https://example.com',
      character: Character.CAT,
      layer: 1,
      users: [],
      userIds: [],
    };

    return foundItem;
  }

  async findMany(): Promise<Item[]> {
    const foundItems = [
      {
        id: 'def-123',
        url: 'https://example.com',
        character: Character.CAT,
        layer: 1,
        users: [],
        userIds: [],
      },
      {
        id: 'def-456',
        url: 'https://example.com',
        character: Character.CAT,
        layer: 1,
        users: [],
        userIds: [],
      },
    ];

    return foundItems;
  }

  async create(): Promise<Item> {
    const createdItem = {
      id: 'def-123',
      url: 'https://example.com',
      character: Character.CAT,
      layer: 1,
      users: [],
      userIds: [],
    };

    return createdItem;
  }

  async update(): Promise<Item> {
    const updatedItem = {
      id: 'def-123',
      url: 'https://example.com',
      character: Character.CAT,
      layer: 1,
      users: [],
      userIds: [],
    };

    return updatedItem;
  }

  async delete(): Promise<Item> {
    const deleteItem = {
      id: 'def-123',
      url: 'https://example.com',
      character: Character.CAT,
      layer: 1,
      users: [],
      userIds: [],
    };

    return deleteItem;
  }
}
