import { Character, Prisma, PrismaClient } from '@prisma/client';

export class CharacterStatusSeeder {
  constructor(private readonly prisma: PrismaClient) {}

  async findCharacterStatuses() {
    const characterStatuses = await this.prisma.characterStatus.findMany();

    return characterStatuses;
  }

  async createCharacterStatuses(userIds: string[], itemIds: string[]) {
    await this.prisma.characterStatus.createMany({
      data: userIds.map<Prisma.CharacterStatusCreateManyInput>((userId) => ({
        character: Character.CAT,
        iconUrl: 'https://firebasestorage.googleapis.com/v0/b/i-shikosai32.appspot.com/o/sys%2Fcharacter%2Fcat%2Fbase.svg?alt=media',
        avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/i-shikosai32.appspot.com/o/sys%2Fcharacter%2Fcat%2Favatar.svg?alt=media',
        isActive: true,
        userId,
        itemIds,
      })),
    });
  }

  async deleteCharacterStatuses() {
    await this.prisma.characterStatus.deleteMany();
  }
}
