import { PrismaClient } from '@prisma/client';

export class UserSeeder {
  constructor(private readonly prisma: PrismaClient) {}

  async createUsers() {
    const createdUsers = await this.prisma.$transaction(
      Array.from<never, ReturnType<PrismaClient['user']['create']>>({ length: 30 }, (_, index) =>
        this.prisma.user.create({
          data: {
            name: `user-${index < 10 ? `0${index}` : index}`,
            email: `user-${index < 10 ? `0${index}` : index}@example.com`,
          },
        }),
      ),
    );

    return createdUsers;
  }

  async deleteUsers() {
    await this.prisma.user.deleteMany();
  }
}
