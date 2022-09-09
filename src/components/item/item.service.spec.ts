import { Character } from '@prisma/client';
import dotenv from 'dotenv';
import ItemService from './item.service';
import PrismaService from '@/libs/prisma/prisma.service';

dotenv.config();
dotenv.config({ path: '.env.test' });

jest.setTimeout(15000);

const createItem = async (prismaService: PrismaService) => {
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
    include: {
      users: {
        include: {
          items: true,
        },
      },
    },
  });

  return createdItem;
};

export default createItem;

describe('Item Service Test', () => {
  let prismaService: PrismaService;
  let itemService: ItemService;

  beforeEach(() => {
    prismaService = new PrismaService();
    itemService = new ItemService(prismaService);
  });

  test('findUnique', async () => {
    const createdItem = await createItem(prismaService);

    const foundItem = await itemService.findUnique({ where: { id: createdItem.id } });

    await expect(foundItem).toEqual(createdItem);

    await prismaService.item.delete({ where: { id: createdItem.id } });
  });

  test('findMany', async () => {
    const createdItem = await createItem(prismaService);

    const foundItems = await itemService.findMany({ where: { character: createdItem.character } });

    await expect(foundItems).toEqual(expect.any(Array<typeof createdItem>));

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
      include: {
        users: {
          include: {
            items: true,
          },
        },
      },
    });

    await expect(createdItem).toEqual(foundItem);

    await prismaService.item.delete({ where: { id: createdItem.id } });
  });

  test('update', async () => {
    const createdItem = await createItem(prismaService);

    const updatedItem = await itemService.update({
      where: { id: createdItem.id },
      data: { character: Character.FOX },
    });

    await expect(updatedItem).toEqual({ ...createdItem, character: Character.FOX });

    await prismaService.item.delete({ where: { id: createdItem.id } });
  });

  test('delete', async () => {
    const createdItem = await createItem(prismaService);

    const deletedItem = await itemService.delete({ where: { id: createdItem.id } });

    await expect(deletedItem).toEqual(createdItem);
  });
});
