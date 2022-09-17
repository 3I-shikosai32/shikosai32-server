import { Test } from '@nestjs/testing';
import dotenv from 'dotenv';
import { GiftRepository } from './gift.repository';
import { PrismaService } from '@/infra/prisma/prisma.service';
import { GiftHistory } from '~/gift-history/domain/model/gift-history.model';

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

  return createdGift;
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

    await prismaService.gift.delete({ where: { id: createdGift.id } });
  });

  test('findMany', async () => {
    const createdGift = await createGift(prismaService);

    const foundGifts = await giftRepository.findMany({ where: { name: createdGift.name } });

    expect(foundGifts).toEqual(expect.any(Array<typeof createdGift>));

    await prismaService.gift.delete({ where: { id: createdGift.id } });
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

    await prismaService.gift.delete({ where: { id: createdGift.id } });
  });

  test('update', async () => {
    const createdGift = await createGift(prismaService);

    const updatedGift = await giftRepository.update({
      where: { id: createdGift.id },
      data: { name: 'もろこし輪太郎' },
    });

    expect(updatedGift).toEqual({ ...createdGift, name: 'もろこし輪太郎' });

    await prismaService.gift.delete({ where: { id: createdGift.id } });
  });

  test('delete', async () => {
    const createdGift = await createGift(prismaService);

    const deletedGift = await giftRepository.delete({ where: { id: createdGift.id } });

    expect(deletedGift).toEqual(createdGift);
  });

  test('findGiftHistoriesByGiftId', async () => {
    const createdGift = await createGift(prismaService);

    const foundGiftHistories = await giftRepository.findGiftHistoriesByGiftId({ where: { id: createdGift.id } });

    expect(foundGiftHistories).toEqual(expect.any(Array<typeof GiftHistory>));

    await prismaService.gift.delete({ where: { id: createdGift.id } });
  });
});
