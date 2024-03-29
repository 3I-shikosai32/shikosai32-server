import { Test } from '@nestjs/testing';
import dotenv from 'dotenv';
import { Gift } from '../domain/model/gift.model';
import { GiftRepository } from './gift.repository';
import { PrismaService } from '@/infra/prisma/prisma.service';

dotenv.config();
dotenv.config({ path: '.env.test' });

jest.setTimeout(15000);

export const createGift = async (prismaService: PrismaService) => {
  const createdGift = await prismaService.gift.create({
    data: {
      name: 'うまい棒',
      iconUrl: 'https://example.com',
      price: 0,
      remaining: 0,
    },
  });

  return new Gift(createdGift);
};

export const deleteGift = async (prismaService: PrismaService, giftId: string) => {
  const deletedGift = await prismaService.gift.delete({
    where: { id: giftId },
  });

  return new Gift(deletedGift);
};

describe('GiftRepository', () => {
  let prismaService: PrismaService;
  let giftRepository: GiftRepository;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [PrismaService, GiftRepository],
    }).compile();

    prismaService = moduleRef.get(PrismaService);
    giftRepository = moduleRef.get(GiftRepository);
  });

  test('findUnique', async () => {
    const createdGift = await createGift(prismaService);

    const foundGift = await giftRepository.findUnique({ where: { id: createdGift.id } });

    expect(foundGift).toEqual(createdGift);

    await deleteGift(prismaService, createdGift.id);
  });

  test('findMany', async () => {
    const createdGift = await createGift(prismaService);

    const foundGifts = await giftRepository.findMany({ where: { name: createdGift.name } });

    expect(foundGifts).toEqual(expect.any(Array<Gift>));

    await deleteGift(prismaService, createdGift.id);
  });

  test('create', async () => {
    const createdGift = await giftRepository.create({
      data: {
        name: 'うまい棒',
        iconUrl: 'https://example.com',
        price: 0,
        remaining: 0,
      },
    });

    const foundGift = await prismaService.gift.findUnique({
      where: {
        id: createdGift.id,
      },
    });

    expect(createdGift).toEqual(foundGift);

    await deleteGift(prismaService, createdGift.id);
  });

  test('update', async () => {
    const createdGift = await createGift(prismaService);

    const updatedGift = await giftRepository.update({
      where: { id: createdGift.id },
      data: { name: 'もろこし輪太郎' },
    });

    expect(updatedGift).toEqual({ ...createdGift, name: 'もろこし輪太郎' });

    await deleteGift(prismaService, createdGift.id);
  });

  test('delete', async () => {
    const createdGift = await createGift(prismaService);

    const deletedGift = await giftRepository.delete({ where: { id: createdGift.id } });

    expect(deletedGift).toEqual(createdGift);
  });
});
