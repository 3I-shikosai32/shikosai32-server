import { GiftName } from '@prisma/client';
import dotenv from 'dotenv';
import GiftService from './gift.service';
import PrismaService from '@/libs/prisma/prisma.service';

dotenv.config();
dotenv.config({ path: '.env.test' });

jest.setTimeout(15000);

const createGift = async (prismaService: PrismaService) => {
  const createdGift = await prismaService.gift.create({
    data: {
      name: GiftName.BABY_STAR,
      iconUrl: 'https://example.com',
      price: 0,
      remaining: 0,
    },
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

export default createGift;

describe('Gift Service Test', () => {
  let prismaService: PrismaService;
  let giftService: GiftService;

  beforeEach(() => {
    prismaService = new PrismaService();
    giftService = new GiftService(prismaService);
  });

  test('findUnique', async () => {
    const createdGift = await createGift(prismaService);

    const foundGift = await giftService.findUnique({ where: { id: createdGift.id } });

    await expect(foundGift).toEqual(createdGift);

    await prismaService.gift.delete({ where: { id: createdGift.id } });
  });

  test('findMany', async () => {
    const createdGift = await createGift(prismaService);

    const foundGifts = await giftService.findMany({ where: { name: createdGift.name } });

    await expect(foundGifts).toEqual(expect.any(Array<typeof createdGift>));

    await prismaService.gift.delete({ where: { id: createdGift.id } });
  });

  test('create', async () => {
    const createdGift = await giftService.create({
      data: {
        name: GiftName.BABY_STAR,
        iconUrl: 'https://example.com',
        price: 0,
        remaining: 0,
      },
    });

    const foundGift = await prismaService.gift.findUnique({
      where: {
        id: createdGift.id,
      },
      include: {
        giftHistories: {
          include: {
            exchangedGift: true,
          },
        },
      },
    });

    await expect(createdGift).toEqual(foundGift);

    await prismaService.gift.delete({ where: { id: createdGift.id } });
  });

  test('update', async () => {
    const createdGift = await createGift(prismaService);

    const updatedGift = await giftService.update({
      where: { id: createdGift.id },
      data: { name: GiftName.CABAGGE },
    });

    await expect(updatedGift).toEqual({ ...createdGift, name: GiftName.CABAGGE });

    await prismaService.gift.delete({ where: { id: createdGift.id } });
  });

  test('delete', async () => {
    const createdGift = await createGift(prismaService);

    const deletedGift = await giftService.delete({ where: { id: createdGift.id } });

    await expect(deletedGift).toEqual(createdGift);
  });
});
