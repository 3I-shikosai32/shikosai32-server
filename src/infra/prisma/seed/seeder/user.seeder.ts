import { Prisma, PrismaClient } from '@prisma/client';

export class UserSeeder {
  constructor(private readonly prisma: PrismaClient) {}

  async findUsers() {
    const users = await this.prisma.user.findMany();

    return users;
  }

  async createUsers() {
    await this.prisma.user.createMany({
      data: Array.from<never, Prisma.UserCreateManyInput>({ length: 30 }, (_, index) => ({
        name: `user-${index < 10 ? `0${index}` : index}`,
        email: `user-${index < 10 ? `0${index}` : index}@example.com`,
      })),
    });
  }

  async deleteUsers() {
    await this.prisma.user.deleteMany();
  }
}
