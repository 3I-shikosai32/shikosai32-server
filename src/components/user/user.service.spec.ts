import { Character } from '@prisma/client';
import dotenv from 'dotenv';
import UserService from './user.service';
import PrismaService from '@/libs/prisma/prisma.service';

dotenv.config();
dotenv.config({ path: '.env.test' });

describe('User Service Test', () => {
  let prismaService: PrismaService;
  let userService: UserService;

  beforeEach(() => {
    prismaService = new PrismaService();
    userService = new UserService(prismaService);
  });

  test('findUnique', async () => {
    const fakeUser = {
      name: 'test user',
      email: 'test@example.com',
      character: Character.CAT,
      iconUrl: 'https://example.com',
      avatarUrl: 'https://example.com',
    };
    const expectUser = await prismaService.user.create({
      data: fakeUser,
      include: {
        giftHistories: {
          include: {
            exchangedGift: true,
          },
        },
      },
    });

    const result = userService.findUnique({ where: { id: expectUser.id } });

    await expect(result).resolves.toEqual(expectUser);

    await prismaService.user.delete({ where: { id: expectUser.id } });
  });

  test('findMany', async () => {
    const fakeUser = {
      name: 'test user',
      email: 'test@example.com',
      character: Character.CAT,
      iconUrl: 'https://example.com',
      avatarUrl: 'https://example.com',
    };
    const expectUser = await prismaService.user.create({
      data: fakeUser,
      include: {
        giftHistories: {
          include: {
            exchangedGift: true,
          },
        },
      },
    });

    const result = userService.findMany({ where: { name: expectUser.name } });

    await expect(result).resolves.toEqual(expect.any(Array<typeof expectUser>));

    await prismaService.user.deleteMany({ where: { name: expectUser.name } });
  });

  test('create', async () => {
    const fakeUser = {
      id: '123456789012345678901234',
      name: 'test user',
      email: 'test@example.com',
      character: Character.CAT,
      iconUrl: 'https://example.com',
      avatarUrl: 'https://example.com',
    };
    const result = await userService.create({ data: fakeUser });

    const expectUser = await prismaService.user.findUnique({
      where: {
        id: fakeUser.id,
      },
      include: {
        giftHistories: {
          include: {
            exchangedGift: true,
          },
        },
      },
    });

    await expect(result).toEqual(expectUser);

    await prismaService.user.delete({ where: { id: expectUser?.id } });
  });

  test('update', async () => {
    const fakeUser = {
      name: 'test user',
      email: 'test@example.com',
      character: Character.CAT,
      iconUrl: 'https://example.com',
      avatarUrl: 'https://example.com',
    };
    const expectUser = await prismaService.user.create({
      data: fakeUser,
      include: {
        giftHistories: {
          include: {
            exchangedGift: true,
          },
        },
      },
    });

    const result = userService.update({
      where: { id: expectUser.id },
      data: { name: 'updated test user' },
    });

    await expect(result).resolves.toEqual({ ...expectUser, name: 'updated test user' });

    await prismaService.user.delete({ where: { id: expectUser.id } });
  });
});
