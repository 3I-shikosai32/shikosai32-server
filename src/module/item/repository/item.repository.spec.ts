import { Test } from '@nestjs/testing';
import { Character } from '@prisma/client';
import dotenv from 'dotenv';
import { ItemRepository } from './item.repository';
import { PrismaService } from '@/infra/prisma/prisma.service';
import { User } from '~/user/domain/model/user.model';

dotenv.config();
dotenv.config({ path: '.env.test' });

jest.setTimeout(15000);

export const createItem = async (prismaService: PrismaService) => {
  const createdItem = await prismaService.item.create({
    data: {
      url: 'https://example.com',
      character: Character.CAT,
      layer: 1,
      users: {
        connect: [],
      },
      userIds: [],
    },
  });

  return createdItem;
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

    await prismaService.item.delete({ where: { id: createdItem.id } });
  });

  test('findMany', async () => {
    const createdItem = await createItem(prismaService);

    const foundItems = await itemService.findMany({ where: { character: createdItem.character } });

    expect(foundItems).toEqual(expect.any(Array<typeof createdItem>));

    await prismaService.item.delete({ where: { id: createdItem.id } });
  });

  test('create', async () => {
    const createdItem = await itemService.create({
      data: {
        url: 'https://example.com',
        character: Character.CAT,
        layer: 1,
        users: {
          connect: [],
        },
        userIds: [],
      },
    });

    const foundItem = await prismaService.item.findUnique({
      where: {
        id: createdItem.id,
      },
    });

    expect(createdItem).toEqual(foundItem);

    await prismaService.item.delete({ where: { id: createdItem.id } });
  });

  test('update', async () => {
    const createdItem = await createItem(prismaService);

    const updatedItem = await itemService.update({
      where: { id: createdItem.id },
      data: { character: Character.FOX },
    });

    expect(updatedItem).toEqual({ ...createdItem, character: Character.FOX });

    await prismaService.item.delete({ where: { id: createdItem.id } });
  });

  test('delete', async () => {
    const createdItem = await createItem(prismaService);

    const deletedItem = await itemService.delete({ where: { id: createdItem.id } });

    expect(deletedItem).toEqual(createdItem);
  });

  test('findUsersByItemId', async () => {
    const createdItem = await createItem(prismaService);

    const foundUsers = await itemService.findUsersByItemId({ where: { id: createdItem.id } });

    expect(foundUsers).toEqual(expect.any(Array<typeof User>));

    await prismaService.item.delete({ where: { id: createdItem.id } });
  });
});
