import { PrismaClient } from '@prisma/client';
import { v4 as uuid } from 'uuid';

export class UserSeeder {
  constructor(private readonly prisma: PrismaClient) {}

  async createUsers() {
    const createdUsers = await this.prisma.$transaction(
      Array.from<never, ReturnType<PrismaClient['user']['create']>>({ length: 30 }, (_, index) =>
        this.prisma.user.create({
          data: {
            name: `user-${index < 10 ? `0${index}` : index}`,
            email: `user-${index < 10 ? `0${index}` : index}@example.com`,
            authId: uuid(),
          },
        }),
      ),
    );

    return createdUsers;
  }

  async deleteUsers() {
    await this.prisma.user.deleteMany();
  }

  async fixImageUrl() {
    const users = await this.prisma.user.findMany({
      include: {
        characterStatuses: true,
      },
    });

    const updatedCharacterStatusesList = await Promise.all(
      users.map(async (user) => {
        const characterStatuses = await this.prisma.characterStatus.findMany({
          where: {
            userId: user.id,
          },
        });

        const updatedCharacterStatuses = await Promise.all(
          characterStatuses.map(async (characterStatus) => {
            const character = await this.prisma.characterStatus.update({
              where: {
                id: characterStatus.id,
              },
              data: {
                iconUrl: `https://firebasestorage.googleapis.com/v0/b/i-shikosai32.appspot.com/o/${encodeURIComponent(
                  `sys/character/${characterStatus.character.toLowerCase()}/`,
                )}icon.svg?alt=media`,
                avatarUrl: `https://firebasestorage.googleapis.com/v0/b/i-shikosai32.appspot.com/o/${encodeURIComponent(
                  `sys/character/${characterStatus.character.toLowerCase()}/`,
                )}base.svg?alt=media`,
              },
            });

            return character;
          }),
        );

        return updatedCharacterStatuses;
      }),
    );

    return updatedCharacterStatusesList;
  }
}
