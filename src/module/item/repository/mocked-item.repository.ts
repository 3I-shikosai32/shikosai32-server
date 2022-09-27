import { Injectable } from '@nestjs/common';
import { Character } from '@prisma/client';
import { Item } from '../domain/model/item.model';
import { ItemRepositoryInterface } from '../domain/service/repository/item.repository';

@Injectable()
export class MockedItemRepository implements ItemRepositoryInterface {
  async findUnique() {
    const foundItem = {
      id: 'def-123',
      url: 'https://example.com',
      character: Character.CAT,
      layer: 1,
      userIds: [],
    };

    return new Item(foundItem);
  }

  async findMany() {
    const foundItems = [
      {
        id: 'def-123',
        url: 'https://example.com',
        character: Character.CAT,
        layer: 1,
        userIds: [],
      },
      {
        id: 'def-456',
        url: 'https://example.com',
        character: Character.CAT,
        layer: 1,
        userIds: [],
      },
    ];

    return foundItems.map((foundItem) => new Item(foundItem));
  }

  async create() {
    const createdItem = {
      id: 'def-123',
      url: 'https://example.com',
      character: Character.CAT,
      layer: 1,
      userIds: [],
    };

    return new Item(createdItem);
  }

  async update() {
    const updatedItem = {
      id: 'def-123',
      url: 'https://example.com',
      character: Character.CAT,
      layer: 1,
      userIds: [],
    };

    return new Item(updatedItem);
  }

  async delete() {
    const deleteItem = {
      id: 'def-123',
      url: 'https://example.com',
      character: Character.CAT,
      layer: 1,
      userIds: [],
    };

    return new Item(deleteItem);
  }
}
