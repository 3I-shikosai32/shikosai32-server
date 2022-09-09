import { Character } from '@prisma/client';
import dotenv from 'dotenv';
import UserService from './user.service';
import PrismaService from '@/libs/prisma/prisma.service';

dotenv.config();
dotenv.config({ path: '.env.test' });

jest.setTimeout(15000);

const createUser = async (prismaService: PrismaService) => {
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

export default createUser;

describe('User Service Test', () => {
  let prismaService: PrismaService;
  let userService: UserService;

  beforeEach(() => {
    prismaService = new PrismaService();
    userService = new UserService(prismaService);
  });

  test('findUnique', async () => {
    const createdUser = await createUser(prismaService);

    const foundUser = await userService.findUnique({ where: { id: createdUser.id } });

    await expect(foundUser).toEqual(createdUser);

    await prismaService.user.delete({ where: { id: createdUser.id } });
  });

  test('findMany', async () => {
    const createdUser = await createUser(prismaService);

    const foundUsers = await userService.findMany({ where: { name: createdUser.name } });

    await expect(foundUsers).toEqual(expect.any(Array<typeof createdUser>));

    await prismaService.user.delete({ where: { id: createdUser.id } });
  });

  test('create', async () => {
    const createdUser = await userService.create({
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

    await expect(createdUser).toEqual(foundUser);

    await prismaService.user.delete({ where: { id: createdUser.id } });
  });

  test('update', async () => {
    const createdUser = await createUser(prismaService);

    const updatedUser = await userService.update({
      where: { id: createdUser.id },
      data: { name: 'updated test user' },
    });

    await expect(updatedUser).toEqual({ ...createdUser, name: 'updated test user' });

    await prismaService.user.delete({ where: { id: createdUser.id } });
  });

  test('delete', async () => {
    const createdUser = await createUser(prismaService);

    const deletedUser = await userService.delete({ where: { id: createdUser.id } });

    await expect(deletedUser).toEqual(createdUser);
  });
});
