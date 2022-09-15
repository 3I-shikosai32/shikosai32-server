import { Test } from '@nestjs/testing';
import { Character } from '@prisma/client';
import dotenv from 'dotenv';
import { UserRepository } from './user.repository';
import { PrismaService } from '@/infra/prisma/prisma.service';

dotenv.config();
dotenv.config({ path: '.env.test' });

jest.setTimeout(15000);

export const createUser = async (prismaService: PrismaService) => {
  const createdUser = await prismaService.user.create({
    data: {
      name: 'test user',
      email: 'test@example.com',
      character: Character.CAT,
      iconUrl: 'https://example.com',
      avatarUrl: 'https://example.com',
    },
    include: {
      items: {
        include: {
          users: true,
        },
      },
      giftHistories: {
        include: {
          exchangedGift: true,
        },
      },
    },
  });

  return createdUser;
};

describe('UserRepository', () => {
  let prismaService: PrismaService;
  let userRepository: UserRepository;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [PrismaService, UserRepository],
    }).compile();

    prismaService = moduleRef.get(PrismaService);
    userRepository = moduleRef.get(UserRepository);
  });

  test('findUnique', async () => {
    const createdUser = await createUser(prismaService);

    const foundUser = await userRepository.findUnique({ where: { id: createdUser.id } });

    expect(foundUser).toEqual(createdUser);

    await prismaService.user.delete({ where: { id: createdUser.id } });
  });

  test('findMany', async () => {
    const createdUser = await createUser(prismaService);

    const foundUsers = await userRepository.findMany({ where: { name: createdUser.name } });

    expect(foundUsers).toEqual(expect.any(Array<typeof createdUser>));

    await prismaService.user.delete({ where: { id: createdUser.id } });
  });

  test('create', async () => {
    const createdUser = await userRepository.create({
      data: {
        name: 'test user',
        email: 'test@example.com',
        character: Character.CAT,
        iconUrl: 'https://example.com',
        avatarUrl: 'https://example.com',
      },
    });

    const foundUser = await prismaService.user.findUnique({
      where: {
        id: createdUser.id,
      },
      include: {
        items: {
          include: {
            users: true,
          },
        },
        giftHistories: {
          include: {
            exchangedGift: true,
          },
        },
      },
    });

    expect(createdUser).toEqual(foundUser);

    await prismaService.user.delete({ where: { id: createdUser.id } });
  });

  test('update', async () => {
    const createdUser = await createUser(prismaService);

    const updatedUser = await userRepository.update({
      where: { id: createdUser.id },
      data: { name: 'updated test user' },
    });

    expect(updatedUser).toEqual({ ...createdUser, name: 'updated test user' });

    await prismaService.user.delete({ where: { id: createdUser.id } });
  });

  test('delete', async () => {
    const createdUser = await createUser(prismaService);

    const deletedUser = await userRepository.delete({ where: { id: createdUser.id } });

    expect(deletedUser).toEqual(createdUser);
  });
});