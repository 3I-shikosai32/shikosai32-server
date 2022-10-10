import { Injectable } from '@nestjs/common';
import { CharacterStatus } from '../domain/model/character-status.model';
import { ItemCompletedHistory } from '../domain/model/item-completed-history.model';
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

@Injectable()
export class CharacterStatusRepository implements CharacterStatusRepositoryInterface {
  constructor(private readonly prismaService: PrismaService) {}

  async findUnique<T extends FindUnique>(args: StrictPropertyCheck<T, FindUnique>) {
    const foundCharacterStatus = await this.prismaService.characterStatus.findUnique(args);

    return foundCharacterStatus
      ? new CharacterStatus({
          ...foundCharacterStatus,
          itemCompletedHistory: foundCharacterStatus.itemCompletedHistory
            ? new ItemCompletedHistory(foundCharacterStatus.itemCompletedHistory)
            : null,
        })
      : null;
  }

  async findMany<T extends FindMany>(args?: StrictPropertyCheck<T, FindMany>) {
    const foundCharacterStatuses = await this.prismaService.characterStatus.findMany(args);

    return foundCharacterStatuses.map(
      (foundCharacterStatus) =>
        new CharacterStatus({
          ...foundCharacterStatus,
          itemCompletedHistory: foundCharacterStatus.itemCompletedHistory
            ? new ItemCompletedHistory(foundCharacterStatus.itemCompletedHistory)
            : null,
        }),
    );
  }

  async create<T extends Create>(args: StrictPropertyCheck<T, Create>) {
    const createdCharacterStatus = await this.prismaService.characterStatus.create(args);

    return new CharacterStatus({
      ...createdCharacterStatus,
      itemCompletedHistory: createdCharacterStatus.itemCompletedHistory
        ? new ItemCompletedHistory(createdCharacterStatus.itemCompletedHistory)
        : null,
    });
  }

  async update<T extends Update>(args: StrictPropertyCheck<T, Update>) {
    const updatedCharacterStatus = await this.prismaService.characterStatus.update(args);

    return new CharacterStatus({
      ...updatedCharacterStatus,
      itemCompletedHistory: updatedCharacterStatus.itemCompletedHistory
        ? new ItemCompletedHistory(updatedCharacterStatus.itemCompletedHistory)
        : null,
    });
  }

  async delete<T extends Delete>(args: StrictPropertyCheck<T, Delete>) {
    const deletedCharacterStatus = await this.prismaService.characterStatus.delete(args);

    return new CharacterStatus({
      ...deletedCharacterStatus,
      itemCompletedHistory: deletedCharacterStatus.itemCompletedHistory
        ? new ItemCompletedHistory(deletedCharacterStatus.itemCompletedHistory)
        : null,
    });
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

    return new CharacterStatus({
      ...foundCharacterStatuses[0],
      itemCompletedHistory: foundCharacterStatuses[0].itemCompletedHistory
        ? new ItemCompletedHistory(foundCharacterStatuses[0].itemCompletedHistory)
        : null,
    });
  }
}
