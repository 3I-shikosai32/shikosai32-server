import { Test } from '@nestjs/testing';
import dotenv from 'dotenv';
import { ItemCompletedHistory } from '../domain/model/item-completed-history.model';
import { ItemCompletedHistoryRepository } from './item-completed-history.repository';
import { PrismaService } from '@/infra/prisma/prisma.service';
import { createCharacterStatus, deleteCharacterStatus } from '~/character-status/repository/character-status.repository.spec';
import { createUser, deleteUser } from '~/user/repository/user.repository.spec';

dotenv.config();
dotenv.config({ path: '.env.test' });

jest.setTimeout(15000);

export const createCharacterStatusHistory = async (prismaService: PrismaService, characterStatusId: string) => {
  const createdItemCompletedHistory = await prismaService.itemCompletedHistory.create({
    data: {
      characterStatusId,
    },
  });

  return new ItemCompletedHistory(createdItemCompletedHistory);
};

export const deleteCharacterStatusHistory = async (prismaService: PrismaService, itemCompletedHistoryId: string) => {
  const deletedItemCompletedHistory = await prismaService.itemCompletedHistory.delete({
    where: { id: itemCompletedHistoryId },
  });

  return new ItemCompletedHistory(deletedItemCompletedHistory);
};

describe('ItemCompletedHistoryRepository', () => {
  let prismaService: PrismaService;
  let itemCompletedHistoryRepository: ItemCompletedHistoryRepository;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [PrismaService, ItemCompletedHistoryRepository],
    }).compile();

    prismaService = moduleRef.get(PrismaService);
    itemCompletedHistoryRepository = moduleRef.get(ItemCompletedHistoryRepository);
  });

  test('findUnique', async () => {
    const createdUser = await createUser(prismaService);
    const createdCharacterStatus = await createCharacterStatus(prismaService, createdUser.id);
    const createdItemCompletedHistory = await createCharacterStatusHistory(prismaService, createdUser.id);

    const foundItemCompletedHistory = await itemCompletedHistoryRepository.findUnique({ where: { id: createdItemCompletedHistory.id } });

    expect(foundItemCompletedHistory).toEqual(createdItemCompletedHistory);

    await deleteCharacterStatusHistory(prismaService, createdItemCompletedHistory.id);
    await deleteCharacterStatus(prismaService, createdCharacterStatus.id);
    await deleteUser(prismaService, createdUser.id);
  });

  test('findMany', async () => {
    const createdUser = await createUser(prismaService);
    const createdCharacterStatus = await createCharacterStatus(prismaService, createdUser.id);
    const createdItemCompletedHistory = await createCharacterStatusHistory(prismaService, createdUser.id);

    const foundItemCompletedHistories = await itemCompletedHistoryRepository.findMany({
      where: { isDelivered: createdItemCompletedHistory.isDelivered },
    });

    expect(foundItemCompletedHistories).toEqual(expect.any(Array<ItemCompletedHistory>));

    await deleteCharacterStatusHistory(prismaService, createdItemCompletedHistory.id);
    await deleteCharacterStatus(prismaService, createdCharacterStatus.id);
    await deleteUser(prismaService, createdUser.id);
  });

  test('create', async () => {
    const createdUser = await createUser(prismaService);
    const createdCharacterStatus = await createCharacterStatus(prismaService, createdUser.id);
    const createdItemCompletedHistory = await itemCompletedHistoryRepository.create({
      data: {
        characterStatus: { connect: { id: createdCharacterStatus.id } },
      },
    });

    const foundItemCompletedHistory = await prismaService.itemCompletedHistory.findUnique({
      where: {
        id: createdItemCompletedHistory.id,
      },
    });
    if (!foundItemCompletedHistory) {
      throw new Error('foundItemCompletedHistory is null');
    }

    expect(createdItemCompletedHistory).toEqual(foundItemCompletedHistory);

    await deleteCharacterStatusHistory(prismaService, createdItemCompletedHistory.id);
    await deleteCharacterStatus(prismaService, createdCharacterStatus.id);
    await deleteUser(prismaService, createdUser.id);
  });

  test('update', async () => {
    const createdUser = await createUser(prismaService);
    const createdCharacterStatus = await createCharacterStatus(prismaService, createdUser.id);
    const createdItemCompletedHistory = await createCharacterStatusHistory(prismaService, createdUser.id);

    const updatedItemCompletedHistory = await itemCompletedHistoryRepository.update({
      where: { id: createdItemCompletedHistory.id },
      data: { isDelivered: true },
    });

    expect(updatedItemCompletedHistory).toEqual({
      ...createdItemCompletedHistory,
      isDelivered: true,
    });

    await deleteCharacterStatusHistory(prismaService, createdItemCompletedHistory.id);
    await deleteCharacterStatus(prismaService, createdCharacterStatus.id);
    await deleteUser(prismaService, createdUser.id);
  });

  test('delete', async () => {
    const createdUser = await createUser(prismaService);
    const createdCharacterStatus = await createCharacterStatus(prismaService, createdUser.id);
    const createdItemCompletedHistory = await createCharacterStatusHistory(prismaService, createdUser.id);

    const deletedItemCompletedHistory = await itemCompletedHistoryRepository.delete({ where: { id: createdItemCompletedHistory.id } });

    expect(deletedItemCompletedHistory).toEqual(createdItemCompletedHistory);

    await deleteCharacterStatus(prismaService, createdCharacterStatus.id);
    await deleteUser(prismaService, createdUser.id);
  });
});
