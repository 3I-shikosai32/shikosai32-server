import { Character, PrismaClient } from '@prisma/client';

export class ItemSeeder {
  constructor(private readonly prisma: PrismaClient) {}

  async createItems() {
    const createdItems = await this.prisma.$transaction(
      Array.from<never, ReturnType<PrismaClient['item']['create']>>({ length: 4 }, (_, index) =>
        this.prisma.item.create({
          data: {
            iconUrl: `https://firebasestorage.googleapis.com/v0/b/i-shikosai32.appspot.com/o/sys%2Fcharacter%2Fcat%2Fitem%2${index}.icon.svg?alt=media`,
            layerUrl: `https://firebasestorage.googleapis.com/v0/b/i-shikosai32.appspot.com/o/sys%2Fcharacter%2Fcat%2Fitem%2${index}.layer.svg?alt=media`,
            character: Character.CAT,
            layer: index,
          },
        }),
      ),
    );

    return createdItems;
  }

  async deleteItems() {
    await this.prisma.item.deleteMany();
  }
}
