import { GiftName } from '@prisma/client';
import dotenv from 'dotenv';
import GiftService from './gift.service';
import PrismaService from '@/libs/prisma/prisma.service';

dotenv.config();
dotenv.config({ path: '.env.test' });

jest.setTimeout(15000);

const createFakeGift = async (prismaService: PrismaService) => {
  const fakeGift = {
    name: GiftName.BABY_STAR,
    iconUrl: 'https://example.com',
    price: 0,
    remaining: 0,
  };
  const createdGift = await prismaService.gift.create({
    data: fakeGift,
    include: {
      giftHistories: {
        include: {
          exchangedGift: true,
        },
      },
    },
  });

  return createdGift;
};

export default createFakeGift;

describe('Gift Service Test', () => {
  let prismaService: PrismaService;
  let giftService: GiftService;

  beforeEach(() => {
    prismaService = new PrismaService();
    giftService = new GiftService(prismaService);
  });

  test('findUnique', async () => {
    const expectGift = await createFakeGift(prismaService);

    const result = giftService.findUnique({ where: { id: expectGift.id } });

    await expect(result).resolves.toEqual(expectGift);

    await prismaService.gift.delete({ where: { id: expectGift.id } });
  });

  test('findMany', async () => {
    const expectGift = await createFakeGift(prismaService);

    const result = giftService.findMany({ where: { name: expectGift.name } });

    await expect(result).resolves.toEqual(expect.any(Array<typeof expectGift>));

    await prismaService.gift.delete({ where: { id: expectGift.id } });
  });

  test('create', async () => {
    const fakeGift = {
      id: '123456789012345678901234',
      name: GiftName.BABY_STAR,
      iconUrl: 'https://example.com',
      price: 0,
      remaining: 0,
    };
    const result = await giftService.create({ data: fakeGift });

    const expectGift = await prismaService.gift.findUnique({
      where: {
        id: fakeGift.id,
      },
      include: {
        giftHistories: {
          include: {
            exchangedGift: true,
          },
        },
      },
    });

    await expect(result).toEqual(expectGift);

    await prismaService.gift.delete({ where: { id: expectGift?.id } });
  });

  test('update', async () => {
    const expectGift = await createFakeGift(prismaService);

    const result = giftService.update({
      where: { id: expectGift.id },
      data: { name: GiftName.CABAGGE },
    });

    await expect(result).resolves.toEqual({ ...expectGift, name: GiftName.CABAGGE });

    await prismaService.gift.delete({ where: { id: expectGift.id } });
  });

  test('delete', async () => {
    const expectGift = await createFakeGift(prismaService);

    const result = giftService.delete({ where: { id: expectGift.id } });

    await expect(result).resolves.toEqual(expectGift);
  });
});
