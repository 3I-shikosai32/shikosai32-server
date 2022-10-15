import { Prisma, PrismaClient } from '@prisma/client';

export class GiftHistorySeeder {
  constructor(private readonly prisma: PrismaClient) {}

  async createGiftHistories(userId: string, giftId: string) {
    await this.prisma.giftHistory.createMany({
      data: Array.from({ length: 10 }).map<Prisma.GiftHistoryCreateManyInput>(() => ({
        userId,
        giftId,
      })),
    });
  }

  async deleteGiftHistories() {
    await this.prisma.giftHistory.deleteMany();
  }
}
