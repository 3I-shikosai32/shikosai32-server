import { PrismaClient } from '@prisma/client';

export class GiftHistorySeeder {
  constructor(private readonly prisma: PrismaClient) {}

  async createGiftHistories(userId: string, giftId: string) {
    const createdGiftHistories = await this.prisma.$transaction(
      Array.from<never, ReturnType<PrismaClient['giftHistory']['create']>>({ length: 10 }, () =>
        this.prisma.giftHistory.create({
          data: {
            userId,
            giftId,
          },
        }),
      ),
    );

    return createdGiftHistories;
  }

  async deleteGiftHistories() {
    await this.prisma.giftHistory.deleteMany();
  }
}
