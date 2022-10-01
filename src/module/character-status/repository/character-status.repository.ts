import { Injectable } from '@nestjs/common';
import { CharacterStatus } from '../domain/model/character-status.model';
import {
  Create,
  Delete,
  FindMany,
  FindUnique,
  Update,
  CharacterStatusRepositoryInterface,
} from '../domain/service/repository/character-status.repository';
import { StrictPropertyCheck } from '@/common/type/strict-property-check.type';
import { PrismaService } from '@/infra/prisma/prisma.service';
import { Item } from '~/item/domain/model/item.model';
import { User } from '~/user/domain/model/user.model';

@Injectable()
export class CharacterStatusRepository implements CharacterStatusRepositoryInterface {
  constructor(private readonly prismaService: PrismaService) {}

  async findUnique<T extends FindUnique>(args: StrictPropertyCheck<T, FindUnique>) {
    const foundCharacterStatus = await this.prismaService.characterStatus.findUnique(args);

    return foundCharacterStatus ? new CharacterStatus(foundCharacterStatus) : null;
  }

  async findMany<T extends FindMany>(args?: StrictPropertyCheck<T, FindMany>) {
    const foundCharacterStatuses = await this.prismaService.characterStatus.findMany(args);

    return foundCharacterStatuses.map((foundCharacterStatus) => new CharacterStatus(foundCharacterStatus));
  }

  async create<T extends Create>(args: StrictPropertyCheck<T, Create>) {
    const createdCharacterStatus = await this.prismaService.characterStatus.create(args);

    return new CharacterStatus(createdCharacterStatus);
  }

  async update<T extends Update>(args: StrictPropertyCheck<T, Update>) {
    const updatedCharacterStatus = await this.prismaService.characterStatus.update(args);

    return new CharacterStatus(updatedCharacterStatus);
  }

  async delete<T extends Delete>(args: StrictPropertyCheck<T, Delete>) {
    const deletedCharacterStatus = await this.prismaService.characterStatus.delete(args);

    return new CharacterStatus(deletedCharacterStatus);
  }

  async findActiveByUserId(userId: string) {
    const foundCharacterStatuses = await this.prismaService.characterStatus.findMany({
      where: {
        userId,
        isActive: true,
      },
    });
    if (foundCharacterStatuses.length === 0) {
      return null;
    }
    if (foundCharacterStatuses.length !== 1) {
      throw new Error('No Active character status or multiple Active character statuses are prohibited');
    }

    return new CharacterStatus(foundCharacterStatuses[0]);
  }

  async findUniqueWithUserAndItems<T extends FindUnique>(args: StrictPropertyCheck<T, FindUnique>): Promise<[CharacterStatus, User, Item[]] | null> {
    const foundCharacterStatusWithItem = await this.prismaService.characterStatus.findUnique({
      ...args,
      include: {
        user: true,
        items: true,
      },
    });

    return foundCharacterStatusWithItem
      ? [
          new CharacterStatus(foundCharacterStatusWithItem),
          new User(foundCharacterStatusWithItem.user),
          foundCharacterStatusWithItem.items.map((item) => new Item(item)),
        ]
      : null;
  }
}
