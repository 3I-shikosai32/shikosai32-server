import dotenv from 'dotenv';
import createFakeGift from '../gift/gift.service.spec';
import createFakeUser from '../user/user.service.spec';
import GiftHistoryService from './gift_history.service';
import PrismaService from '@/libs/prisma/prisma.service';

dotenv.config();
dotenv.config({ path: '.env.test' });

jest.setTimeout(15000);

const createFakeGiftHistory = async (prismaService: PrismaService) => {
  const createdUser = await createFakeUser(prismaService);
  const createdGift = await createFakeGift(prismaService);

  const fakeGiftHistory = {
    userId: createdUser.id,
    giftId: createdGift.id,
  };
  const createdGiftHistory = await prismaService.giftHistory.create({
    data: fakeGiftHistory,
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
    const { createdUser, createdGift, createdGiftHistory } = await createFakeGiftHistory(prismaService);
    const expectGiftHistory = createdGiftHistory;

    const result = giftHistoryService.findUnique({ where: { id: expectGiftHistory.id } });

    await expect(result).resolves.toEqual(expectGiftHistory);

    await deleteFakeGiftHistory(prismaService, createdUser.id, createdGift.id, createdGiftHistory.id);
  });

  test('findMany', async () => {
    const { createdUser, createdGift, createdGiftHistory } = await createFakeGiftHistory(prismaService);
    const expectGiftHistory = createdGiftHistory;

    const result = giftHistoryService.findMany({ where: { isDelivered: expectGiftHistory.isDelivered } });

    await expect(result).resolves.toEqual(expect.any(Array<typeof expectGiftHistory>));

    await deleteFakeGiftHistory(prismaService, createdUser.id, createdGift.id, createdGiftHistory.id);
  });

  test('create', async () => {
    const createdUser = await createFakeUser(prismaService);
    const createdGift = await createFakeGift(prismaService);
    const fakeGiftHistory = {
      id: '123456789012345678901234',
      user: { connect: { id: createdUser.id } },
      exchangedGift: { connect: { id: createdGift.id } },
    };
    const result = await giftHistoryService.create({ data: fakeGiftHistory });

    const expectGiftHistory = await prismaService.giftHistory.findUnique({
      where: {
        id: fakeGiftHistory.id,
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
    if (!expectGiftHistory) {
      throw new Error('expectGiftHistory is null');
    }

    await expect(result).toEqual(expectGiftHistory);

    await deleteFakeGiftHistory(prismaService, createdUser.id, createdGift.id, expectGiftHistory.id);
  });

  test('update', async () => {
    const { createdUser, createdGift, createdGiftHistory } = await createFakeGiftHistory(prismaService);
    const expectGiftHistory = createdGiftHistory;

    const result = giftHistoryService.update({
      where: { id: expectGiftHistory.id },
      data: { isDelivered: true },
    });

    await expect(result).resolves.toEqual({
      ...expectGiftHistory,
      isDelivered: true,
      user: {
        ...expectGiftHistory.user,
        giftHistories: expectGiftHistory.user.giftHistories.map((giftHistory) => ({
          ...giftHistory,
          isDelivered: true,
        })),
      },
      exchangedGift: {
        ...expectGiftHistory.exchangedGift,
        giftHistories: expectGiftHistory.exchangedGift.giftHistories.map((giftHistory) => ({
          ...giftHistory,
          isDelivered: true,
        })),
      },
    });

    await deleteFakeGiftHistory(prismaService, createdUser.id, createdGift.id, createdGiftHistory.id);
  });

  test('delete', async () => {
    const { createdUser, createdGift, createdGiftHistory } = await createFakeGiftHistory(prismaService);
    const expectGiftHistory = createdGiftHistory;

    const result = giftHistoryService.delete({ where: { id: expectGiftHistory.id } });

    await expect(result).resolves.toEqual(expectGiftHistory);

    await prismaService.user.delete({ where: { id: createdUser.id } });
    await prismaService.gift.delete({ where: { id: createdGift.id } });
  });
});
