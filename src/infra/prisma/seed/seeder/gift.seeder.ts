import { PrismaClient } from '@prisma/client';

export class GiftSeeder {
  constructor(private readonly prisma: PrismaClient) {}

  async createGifts() {
    const createdGifts = await this.prisma.$transaction(
      Array.from<never, ReturnType<PrismaClient['gift']['create']>>({ length: 10 }, (_, index) =>
        this.prisma.gift.create({
          data: {
            name: `gift-${index < 10 ? `0${index}` : index}`,
            iconUrl: `https://firebasestorage.googleapis.com/v0/b/i-shikosai32.appspot.com/o/sys%2Fgift%2${index}.png?alt=media`,
            price: 10,
            remaining: 30,
          },
        }),
      ),
    );

    return createdGifts;
  }

  async deleteGifts() {
    await this.prisma.gift.deleteMany();
  }
}
