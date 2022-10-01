import { Injectable } from '@nestjs/common';
import { User } from '../domain/model/user.model';
import { Create, Delete, FindMany, FindUnique, Update, UserRepositoryInterface } from '../domain/service/repository/user.repository';
import { StrictPropertyCheck } from '@/common/type/strict-property-check.type';
import { PrismaService } from '@/infra/prisma/prisma.service';
import { CharacterStatus } from '~/character-status/domain/model/character-status.model';
import { Item } from '~/item/domain/model/item.model';

@Injectable()
export class UserRepository implements UserRepositoryInterface {
  constructor(private readonly prismaService: PrismaService) {}

  async findUnique<T extends FindUnique>(args: StrictPropertyCheck<T, FindUnique>) {
    const foundUser = await this.prismaService.user.findUnique(args);

    return foundUser ? new User(foundUser) : null;
  }

  async findMany<T extends FindMany>(args?: StrictPropertyCheck<T, FindMany>) {
    const foundUsers = await this.prismaService.user.findMany(args);

    return foundUsers.map((foundUser) => new User(foundUser));
  }

  async create<T extends Create>(args: StrictPropertyCheck<T, Create>) {
    const createdUser = await this.prismaService.user.create(args);

    return new User(createdUser);
  }

  async update<T extends Update>(args: StrictPropertyCheck<T, Update>) {
    const updatedUser = await this.prismaService.user.update(args);

    return new User(updatedUser);
  }

  async delete<T extends Delete>(args: StrictPropertyCheck<T, Delete>) {
    const deleteGiftHistories = this.prismaService.giftHistory.deleteMany({ where: { userId: args.where.id } });
    const deleteUser = this.prismaService.user.delete(args);

    const [, deletedUser] = await this.prismaService.$transaction([deleteGiftHistories, deleteUser]);

    return new User(deletedUser);
  }

  async findUniqueWithRelations<T extends FindUnique>(args: StrictPropertyCheck<T, FindUnique>): Promise<[User, CharacterStatus, Item[]] | null> {
    const foundUser = await this.prismaService.user.findUnique({
      ...args,
      include: {
        CharacterStatuses: {
          where: {
            isActive: { equals: true },
          },
          include: {
            items: true,
          },
        },
      },
    });

    if (foundUser?.CharacterStatuses.length !== 1) {
      throw new Error('User has no character or has more than one character');
    }
    const [foundCharacterStatus] = foundUser.CharacterStatuses;

    return foundUser
      ? [new User(foundUser), new CharacterStatus(foundCharacterStatus), foundCharacterStatus.items.map((item) => new Item(item))]
      : null;
  }
}
