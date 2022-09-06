import dotenv from 'dotenv';
import createFakeGift from '../gift/gift.service.spec';
import createFakeUser from '../user/user.service.spec';
import GiftHistoryService from './gift_history.service';
import PrismaService from '@/libs/prisma/prisma.service';

dotenv.config();
dotenv.config({ path: '.env.test' });

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

  return createdGiftHistory;
};

describe('GiftHistory Service Test', () => {
  let prismaService: PrismaService;
  let giftHistoryService: GiftHistoryService;

  beforeEach(() => {
    prismaService = new PrismaService();
    giftHistoryService = new GiftHistoryService(prismaService);
  });

  test('findUnique', async () => {
    const expectGiftHistory = await createFakeGiftHistory(prismaService);

    const result = giftHistoryService.findUnique({ where: { id: expectGiftHistory.id } });

    await expect(result).resolves.toEqual(expectGiftHistory);

    await prismaService.giftHistory.delete({ where: { id: expectGiftHistory.id } });
  });

  test('findMany', async () => {
    const expectGiftHistory = await createFakeGiftHistory(prismaService);

    const result = giftHistoryService.findMany({ where: { isDelivered: expectGiftHistory.isDelivered } });

    await expect(result).resolves.toEqual(expect.any(Array<typeof expectGiftHistory>));

    await prismaService.giftHistory.deleteMany({ where: { isDelivered: expectGiftHistory.isDelivered } });
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

    await expect(result).toEqual(expectGiftHistory);

    await prismaService.giftHistory.delete({ where: { id: expectGiftHistory?.id } });
  });

  test('update', async () => {
    const expectGiftHistory = await createFakeGiftHistory(prismaService);

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

    await prismaService.giftHistory.delete({ where: { id: expectGiftHistory.id } });
  });

  test('delete', async () => {
    const expectGiftHistory = await createFakeGiftHistory(prismaService);

    const result = giftHistoryService.delete({ where: { id: expectGiftHistory.id } });

    await expect(result).resolves.toEqual(expectGiftHistory);
  });
});
