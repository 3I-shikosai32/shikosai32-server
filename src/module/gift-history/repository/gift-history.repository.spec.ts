import { Test } from '@nestjs/testing';
import dotenv from 'dotenv';
import { GiftHistoryRepository } from './gift-history.repository';
import { PrismaService } from '@/infra/prisma/prisma.service';
import { createGift } from '~/gift/repository/gift.repository.spec';
import { createUser } from '~/user/repository/user.repository.spec';

dotenv.config();
dotenv.config({ path: '.env.test' });

jest.setTimeout(15000);

export const createGiftHistory = async (prismaService: PrismaService) => {
  const createdUser = await createUser(prismaService);
  const createdGift = await createGift(prismaService);
  const createdGiftHistory = await prismaService.giftHistory.create({
    data: {
      userId: createdUser.id,
      giftId: createdGift.id,
    },
  });

  return { createdUser, createdGift, createdGiftHistory };
};

export const deleteFakeGiftHistory = async (prismaService: PrismaService, userId: string, giftId: string, giftHistoryId: string) => {
  await prismaService.giftHistory.delete({ where: { id: giftHistoryId } });
  await prismaService.user.delete({ where: { id: userId } });
  await prismaService.gift.delete({ where: { id: giftId } });
};

describe('GiftHistoryRepository', () => {
  let prismaService: PrismaService;
  let giftHistoryRepository: GiftHistoryRepository;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [PrismaService, GiftHistoryRepository],
    }).compile();

    prismaService = moduleRef.get(PrismaService);
    giftHistoryRepository = moduleRef.get(GiftHistoryRepository);
  });

  test('findUnique', async () => {
    const { createdUser, createdGift, createdGiftHistory } = await createGiftHistory(prismaService);

    const foundGiftHistory = await giftHistoryRepository.findUnique({ where: { id: createdGiftHistory.id } });

    expect(foundGiftHistory).toEqual(createdGiftHistory);

    await deleteFakeGiftHistory(prismaService, createdUser.id, createdGift.id, createdGiftHistory.id);
  });

  test('findMany', async () => {
    const { createdUser, createdGift, createdGiftHistory } = await createGiftHistory(prismaService);

    const foundGiftHistories = await giftHistoryRepository.findMany({ where: { isDelivered: createdGiftHistory.isDelivered } });

    expect(foundGiftHistories).toEqual(expect.any(Array<typeof createdGiftHistory>));

    await deleteFakeGiftHistory(prismaService, createdUser.id, createdGift.id, createdGiftHistory.id);
  });

  test('create', async () => {
    const createdUser = await createUser(prismaService);
    const createdGift = await createGift(prismaService);
    const createdGiftHistory = await giftHistoryRepository.create({
      data: {
        user: { connect: { id: createdUser.id } },
        exchangedGift: { connect: { id: createdGift.id } },
      },
    });

    const foundGiftHistory = await prismaService.giftHistory.findUnique({
      where: {
        id: createdGiftHistory.id,
      },
    });
    if (!foundGiftHistory) {
      throw new Error('foundGiftHistory is null');
    }

    expect(createdGiftHistory).toEqual(foundGiftHistory);

    await deleteFakeGiftHistory(prismaService, createdUser.id, createdGift.id, createdGiftHistory.id);
  });

  test('update', async () => {
    const { createdUser, createdGift, createdGiftHistory } = await createGiftHistory(prismaService);

    const updatedGiftHistory = await giftHistoryRepository.update({
      where: { id: createdGiftHistory.id },
      data: { isDelivered: true },
    });

    expect(updatedGiftHistory).toEqual({
      ...createdGiftHistory,
      isDelivered: true,
    });

    await deleteFakeGiftHistory(prismaService, createdUser.id, createdGift.id, createdGiftHistory.id);
  });

  test('delete', async () => {
    const { createdUser, createdGift, createdGiftHistory } = await createGiftHistory(prismaService);

    const deletedGiftHistory = await giftHistoryRepository.delete({ where: { id: createdGiftHistory.id } });

    expect(deletedGiftHistory).toEqual(createdGiftHistory);

    await prismaService.user.delete({ where: { id: createdUser.id } });
    await prismaService.gift.delete({ where: { id: createdGift.id } });
  });

  test('findUserByGiftHistoryId', async () => {
    const { createdUser, createdGift, createdGiftHistory } = await createGiftHistory(prismaService);

    const foundUser = await giftHistoryRepository.findUserByGiftHistoryId({ where: { id: createdGiftHistory.id } });

    expect(foundUser).toEqual(createdUser);

    await deleteFakeGiftHistory(prismaService, createdUser.id, createdGift.id, createdGiftHistory.id);
  });
});
