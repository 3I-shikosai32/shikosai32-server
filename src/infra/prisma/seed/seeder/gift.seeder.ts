import { Prisma, PrismaClient } from '@prisma/client';

export class GiftSeeder {
  constructor(private readonly prisma: PrismaClient) {}

  async findGifts() {
    const gifts = await this.prisma.gift.findMany();

    return gifts;
  }

  async createGifts() {
    await this.prisma.gift.createMany({
      data: Array.from({ length: 10 }).map<Prisma.GiftCreateManyInput>((_, index) => ({
        name: `Gift-${index < 10 ? `0${index}` : index}`,
        iconUrl: `https://firebasestorage.googleapis.com/v0/b/i-shikosai32.appspot.com/o/sys%2Fgift%2${index}.png?alt=media`,
        price: 10,
        remaining: 30,
      })),
    });
  }

  async deleteGifts() {
    await this.prisma.gift.deleteMany();
  }
}
