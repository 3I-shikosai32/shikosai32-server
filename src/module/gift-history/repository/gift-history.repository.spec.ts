import { Test } from '@nestjs/testing';
import dotenv from 'dotenv';
import { GiftHistory } from '../domain/model/gift-history.model';
import { GiftHistoryRepository } from './gift-history.repository';
import { PrismaService } from '@/infra/prisma/prisma.service';
import { createGift, deleteGift } from '~/gift/repository/gift.repository.spec';
import { createUser, deleteUser } from '~/user/repository/user.repository.spec';

dotenv.config();
dotenv.config({ path: '.env.test' });

jest.setTimeout(15000);

export const createGiftHistory = async (prismaService: PrismaService, userId: string, giftId: string) => {
  const createdGiftHistory = await prismaService.giftHistory.create({
    data: {
      userId,
      giftId,
    },
  });

  return new GiftHistory(createdGiftHistory);
};

export const deleteGiftHistory = async (prismaService: PrismaService, giftHistoryId: string) => {
  const deletedGiftHistory = await prismaService.giftHistory.delete({
    where: { id: giftHistoryId },
  });

  return new GiftHistory(deletedGiftHistory);
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
    const createdUser = await createUser(prismaService);
    const createdGift = await createGift(prismaService);
    const createdGiftHistory = await createGiftHistory(prismaService, createdUser.id, createdGift.id);

    const foundGiftHistory = await giftHistoryRepository.findUnique({ where: { id: createdGiftHistory.id } });

    expect(foundGiftHistory).toEqual(createdGiftHistory);

    await deleteGiftHistory(prismaService, createdGiftHistory.id);
    await deleteUser(prismaService, createdUser.id);
    await deleteGift(prismaService, createdGift.id);
  });

  test('findMany', async () => {
    const createdUser = await createUser(prismaService);
    const createdGift = await createGift(prismaService);
    const createdGiftHistory = await createGiftHistory(prismaService, createdUser.id, createdGift.id);

    const foundGiftHistories = await giftHistoryRepository.findMany({ where: { isDelivered: createdGiftHistory.isDelivered } });

    expect(foundGiftHistories).toEqual(expect.any(Array<GiftHistory>));

    await deleteGiftHistory(prismaService, createdGiftHistory.id);
    await deleteUser(prismaService, createdUser.id);
    await deleteGift(prismaService, createdGift.id);
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

    await deleteGiftHistory(prismaService, createdGiftHistory.id);
    await deleteUser(prismaService, createdUser.id);
    await deleteGift(prismaService, createdGift.id);
  });

  test('update', async () => {
    const createdUser = await createUser(prismaService);
    const createdGift = await createGift(prismaService);
    const createdGiftHistory = await createGiftHistory(prismaService, createdUser.id, createdGift.id);

    const updatedGiftHistory = await giftHistoryRepository.update({
      where: { id: createdGiftHistory.id },
      data: { isDelivered: true },
    });

    expect(updatedGiftHistory).toEqual({
      ...createdGiftHistory,
      isDelivered: true,
    });

    await deleteGiftHistory(prismaService, createdGiftHistory.id);
    await deleteUser(prismaService, createdUser.id);
    await deleteGift(prismaService, createdGift.id);
  });

  test('delete', async () => {
    const createdUser = await createUser(prismaService);
    const createdGift = await createGift(prismaService);
    const createdGiftHistory = await createGiftHistory(prismaService, createdUser.id, createdGift.id);

    const deletedGiftHistory = await giftHistoryRepository.delete({ where: { id: createdGiftHistory.id } });

    expect(deletedGiftHistory).toEqual(createdGiftHistory);

    await deleteUser(prismaService, createdUser.id);
    await deleteGift(prismaService, createdGift.id);
  });
});
