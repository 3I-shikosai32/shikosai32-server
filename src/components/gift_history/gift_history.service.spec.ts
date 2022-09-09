import dotenv from 'dotenv';
import createGift from '../gift/gift.service.spec';
import createUser from '../user/user.service.spec';
import GiftHistoryService from './gift_history.service';
import PrismaService from '@/libs/prisma/prisma.service';

dotenv.config();
dotenv.config({ path: '.env.test' });

jest.setTimeout(15000);

const createGiftHistory = async (prismaService: PrismaService) => {
  const createdUser = await createUser(prismaService);
  const createdGift = await createGift(prismaService);
  const createdGiftHistory = await prismaService.giftHistory.create({
    data: {
      userId: createdUser.id,
      giftId: createdGift.id,
    },
    include: {
      user: {
        include: {
          giftHistories: true,
        },
      },
      exchangedGift: {
        include: {
          giftHistories: true,
        },
      },
    },
  });

  return { createdUser, createdGift, createdGiftHistory };
};

const deleteFakeGiftHistory = async (prismaService: PrismaService, userId: string, giftId: string, giftHistoryId: string) => {
  await prismaService.giftHistory.delete({ where: { id: giftHistoryId } });
  await prismaService.user.delete({ where: { id: userId } });
  await prismaService.gift.delete({ where: { id: giftId } });
};

describe('GiftHistory Service Test', () => {
  let prismaService: PrismaService;
  let giftHistoryService: GiftHistoryService;

  beforeEach(() => {
    prismaService = new PrismaService();
    giftHistoryService = new GiftHistoryService(prismaService);
  });

  test('findUnique', async () => {
    const { createdUser, createdGift, createdGiftHistory } = await createGiftHistory(prismaService);

    const foundGiftHistory = await giftHistoryService.findUnique({ where: { id: createdGiftHistory.id } });

    await expect(foundGiftHistory).toEqual(createdGiftHistory);

    await deleteFakeGiftHistory(prismaService, createdUser.id, createdGift.id, createdGiftHistory.id);
  });

  test('findMany', async () => {
    const { createdUser, createdGift, createdGiftHistory } = await createGiftHistory(prismaService);

    const foundGiftHistories = await giftHistoryService.findMany({ where: { isDelivered: createdGiftHistory.isDelivered } });

    await expect(foundGiftHistories).toEqual(expect.any(Array<typeof createdGiftHistory>));

    await deleteFakeGiftHistory(prismaService, createdUser.id, createdGift.id, createdGiftHistory.id);
  });

  test('create', async () => {
    const createdUser = await createUser(prismaService);
    const createdGift = await createGift(prismaService);
    const createdGiftHistory = await giftHistoryService.create({
      data: {
        user: { connect: { id: createdUser.id } },
        exchangedGift: { connect: { id: createdGift.id } },
      },
    });

    const foundGiftHistory = await prismaService.giftHistory.findUnique({
      where: {
        id: createdGiftHistory.id,
      },
      include: {
        user: {
          include: {
            giftHistories: true,
          },
        },
        exchangedGift: {
          include: {
            giftHistories: true,
          },
        },
      },
    });
    if (!foundGiftHistory) {
      throw new Error('foundGiftHistory is null');
    }

    await expect(createdGiftHistory).toEqual(foundGiftHistory);

    await deleteFakeGiftHistory(prismaService, createdUser.id, createdGift.id, createdGiftHistory.id);
  });

  test('update', async () => {
    const { createdUser, createdGift, createdGiftHistory } = await createGiftHistory(prismaService);

    const updatedGiftHistory = await giftHistoryService.update({
      where: { id: createdGiftHistory.id },
      data: { isDelivered: true },
    });

    await expect(updatedGiftHistory).toEqual({
      ...createdGiftHistory,
      isDelivered: true,
      user: {
        ...createdGiftHistory.user,
        giftHistories: createdGiftHistory.user.giftHistories.map((giftHistory) => ({
          ...giftHistory,
          isDelivered: true,
        })),
      },
      exchangedGift: {
        ...createdGiftHistory.exchangedGift,
        giftHistories: createdGiftHistory.exchangedGift.giftHistories.map((giftHistory) => ({
          ...giftHistory,
          isDelivered: true,
        })),
      },
    });

    await deleteFakeGiftHistory(prismaService, createdUser.id, createdGift.id, createdGiftHistory.id);
  });

  test('delete', async () => {
    const { createdUser, createdGift, createdGiftHistory } = await createGiftHistory(prismaService);

    const deletedGiftHistory = await giftHistoryService.delete({ where: { id: createdGiftHistory.id } });

    await expect(deletedGiftHistory).toEqual(createdGiftHistory);

    await prismaService.user.delete({ where: { id: createdUser.id } });
    await prismaService.gift.delete({ where: { id: createdGift.id } });
  });
});
