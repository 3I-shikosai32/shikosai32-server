import { Character, PrismaClient } from '@prisma/client';

export class CharacterStatusSeeder {
  constructor(private readonly prisma: PrismaClient) {}

  async createCharacterStatuses(userIds: string[], itemIds: string[]) {
    const createdCharacterStatuses = await this.prisma.$transaction(
      userIds.map<ReturnType<PrismaClient['characterStatus']['create']>>((userId) =>
        this.prisma.characterStatus.create({
          data: {
            character: Character.CAT,
            iconUrl: 'https://firebasestorage.googleapis.com/v0/b/i-shikosai32.appspot.com/o/sys%2Fcharacter%2Fcat%2Fbase.svg?alt=media',
            avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/i-shikosai32.appspot.com/o/sys%2Fcharacter%2Fcat%2Favatar.svg?alt=media',
            isActive: true,
            user: {
              connect: { id: userId },
            },
            items: {
              connect: itemIds.map((id) => ({ id })),
            },
          },
        }),
      ),
    );

    return createdCharacterStatuses;
  }

  async deleteCharacterStatuses() {
    await this.prisma.characterStatus.deleteMany();
  }
}
