import { Injectable } from '@nestjs/common';
import { Character } from '@prisma/client';
import { ItemInterface } from '../domain/service/model/item.model';
import { ItemRepositoryInterface } from '../domain/service/repository/item.repository';

@Injectable()
export class MockedItemRepository implements ItemRepositoryInterface {
  async findUnique(): Promise<ItemInterface> {
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

  async findMany(): Promise<ItemInterface[]> {
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

  async create(): Promise<ItemInterface> {
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

  async update(): Promise<ItemInterface> {
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

  async delete(): Promise<ItemInterface> {
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
