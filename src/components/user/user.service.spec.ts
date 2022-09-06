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
      id: `${Date.now().toString().repeat(2).slice(2)}`,
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
});
