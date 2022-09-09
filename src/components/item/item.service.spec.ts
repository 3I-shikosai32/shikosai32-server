import { Character } from '@prisma/client';
import dotenv from 'dotenv';
import ItemService from './item.service';
import PrismaService from '@/libs/prisma/prisma.service';

dotenv.config();
dotenv.config({ path: '.env.test' });

jest.setTimeout(15000);

const createFakeItem = async (prismaService: PrismaService) => {
  const fakeItem = {
    url: 'https://example.com',
    character: Character.CAT,
    layer: 1,
    users: {
      connect: [],
    },
    userIds: [],
  };
  const createdItem = await prismaService.item.create({
    data: fakeItem,
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

export default createFakeItem;

describe('Item Service Test', () => {
  let prismaService: PrismaService;
  let itemService: ItemService;

  beforeEach(() => {
    prismaService = new PrismaService();
    itemService = new ItemService(prismaService);
  });

  test('findUnique', async () => {
    const expectItem = await createFakeItem(prismaService);

    const result = itemService.findUnique({ where: { id: expectItem.id } });

    await expect(result).resolves.toEqual(expectItem);

    await prismaService.item.delete({ where: { id: expectItem.id } });
  });

  test('findMany', async () => {
    const expectItem = await createFakeItem(prismaService);

    const result = itemService.findMany({ where: { character: expectItem.character } });

    await expect(result).resolves.toEqual(expect.any(Array<typeof expectItem>));

    await prismaService.item.delete({ where: { id: expectItem.id } });
  });

  test('create', async () => {
    const fakeItem = {
      id: '123456789012345678901234',
      url: 'https://example.com',
      character: Character.CAT,
      layer: 1,
      users: {
        connect: [],
      },
      userIds: [],
    };
    const result = await itemService.create({ data: fakeItem });

    const expectItem = await prismaService.item.findUnique({
      where: {
        id: fakeItem.id,
      },
      include: {
        users: {
          include: {
            items: true,
          },
        },
      },
    });

    await expect(result).toEqual(expectItem);

    await prismaService.item.delete({ where: { id: expectItem?.id } });
  });

  test('update', async () => {
    const expectItem = await createFakeItem(prismaService);

    const result = itemService.update({
      where: { id: expectItem.id },
      data: { character: Character.FOX },
    });

    await expect(result).resolves.toEqual({ ...expectItem, character: Character.FOX });

    await prismaService.item.delete({ where: { id: expectItem.id } });
  });

  test('delete', async () => {
    const expectItem = await createFakeItem(prismaService);

    const result = itemService.delete({ where: { id: expectItem.id } });

    await expect(result).resolves.toEqual(expectItem);
  });
});
