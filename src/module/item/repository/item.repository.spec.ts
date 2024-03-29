import { Test } from '@nestjs/testing';
import { Character } from '@prisma/client';
import dotenv from 'dotenv';
import { Item } from '../domain/model/item.model';
import { ItemRepository } from './item.repository';
import { PrismaService } from '@/infra/prisma/prisma.service';

dotenv.config();
dotenv.config({ path: '.env.test' });

jest.setTimeout(15000);

export const createItem = async (prismaService: PrismaService) => {
  const createdItem = await prismaService.item.create({
    data: {
      iconUrl: 'https://example.com',
      layerUrl: 'https://example.com',
      character: Character.CAT,
      layer: 1,
    },
  });

  return new Item(createdItem);
};

export const deleteItem = async (prismaService: PrismaService, itemId: string) => {
  const deletedItem = await prismaService.item.delete({
    where: { id: itemId },
  });

  return new Item(deletedItem);
};

describe('ItemRepository', () => {
  let prismaService: PrismaService;
  let itemService: ItemRepository;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [PrismaService, ItemRepository],
    }).compile();

    prismaService = moduleRef.get(PrismaService);
    itemService = moduleRef.get(ItemRepository);
  });

  test('findUnique', async () => {
    const createdItem = await createItem(prismaService);

    const foundItem = await itemService.findUnique({ where: { id: createdItem.id } });

    expect(foundItem).toEqual(createdItem);

    await deleteItem(prismaService, createdItem.id);
  });

  test('findMany', async () => {
    const createdItem = await createItem(prismaService);

    const foundItems = await itemService.findMany({ where: { character: createdItem.character } });

    expect(foundItems).toEqual(expect.any(Array<Item>));

    await deleteItem(prismaService, createdItem.id);
  });

  test('create', async () => {
    const createdItem = await itemService.create({
      data: {
        iconUrl: 'https://example.com',
        layerUrl: 'https://example.com',
        character: Character.CAT,
        layer: 1,
      },
    });

    const foundItem = await prismaService.item.findUnique({
      where: {
        id: createdItem.id,
      },
    });

    expect(createdItem).toEqual(foundItem);

    await deleteItem(prismaService, createdItem.id);
  });

  test('update', async () => {
    const createdItem = await createItem(prismaService);

    const updatedItem = await itemService.update({
      where: { id: createdItem.id },
      data: { character: Character.FOX },
    });

    expect(updatedItem).toEqual({ ...createdItem, character: Character.FOX });

    await deleteItem(prismaService, createdItem.id);
  });

  test('delete', async () => {
    const createdItem = await createItem(prismaService);

    const deletedItem = await itemService.delete({ where: { id: createdItem.id } });

    expect(deletedItem).toEqual(createdItem);
  });
});
