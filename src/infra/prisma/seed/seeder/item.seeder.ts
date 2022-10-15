import { Character, Prisma, PrismaClient } from '@prisma/client';

export class ItemSeeder {
  constructor(private readonly prisma: PrismaClient) {}

  async findItems() {
    const items = await this.prisma.item.findMany();

    return items;
  }

  async createItems() {
    await this.prisma.item.createMany({
      data: Array.from<never, Prisma.ItemCreateManyInput>({ length: 4 }, (_, index) => ({
        iconUrl: `https://firebasestorage.googleapis.com/v0/b/i-shikosai32.appspot.com/o/sys%2Fcharacter%2Fcat%2Fitem%2${index}.icon.svg?alt=media`,
        layerUrl: `https://firebasestorage.googleapis.com/v0/b/i-shikosai32.appspot.com/o/sys%2Fcharacter%2Fcat%2Fitem%2${index}.layer.svg?alt=media`,
        character: Character.CAT,
        layer: index,
      })),
    });
  }

  async updateItems(itemIds: string[], characterStatusIds: string[]) {
    await this.prisma.item.updateMany({
      where: {
        id: {
          in: itemIds,
        },
      },
      data: {
        characterStatusIds,
      },
    });
  }

  async deleteItems() {
    await this.prisma.item.deleteMany();
  }
}
