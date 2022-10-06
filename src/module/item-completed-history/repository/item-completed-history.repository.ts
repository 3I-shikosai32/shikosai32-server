import { Injectable } from '@nestjs/common';
import { ItemCompletedHistory } from '../domain/model/item-completed-history.model';
import {
  Create,
  Delete,
  FindMany,
  FindUnique,
  ItemCompletedHistoryRepositoryInterface,
  Update,
} from '../domain/service/repository/item-completed-history.repository';
import { StrictPropertyCheck } from '@/common/type/strict-property-check.type';
import { PrismaService } from '@/infra/prisma/prisma.service';

@Injectable()
export class ItemCompletedHistoryRepository implements ItemCompletedHistoryRepositoryInterface {
  constructor(private readonly prismaService: PrismaService) {}

  async findUnique<T extends FindUnique>(args: StrictPropertyCheck<T, FindUnique>) {
    const foundItemCompletedHistory = await this.prismaService.itemCompletedHistory.findUnique(args);

    return foundItemCompletedHistory ? new ItemCompletedHistory(foundItemCompletedHistory) : null;
  }

  async findMany<T extends FindMany>(args?: StrictPropertyCheck<T, FindMany>) {
    const foundItemCompletedHistories = await this.prismaService.itemCompletedHistory.findMany(args);

    return foundItemCompletedHistories.map((foundItemCompletedHistory) => new ItemCompletedHistory(foundItemCompletedHistory));
  }

  async create<T extends Create>(args: StrictPropertyCheck<T, Create>) {
    const createdItemCompletedHistory = await this.prismaService.itemCompletedHistory.create(args);

    return new ItemCompletedHistory(createdItemCompletedHistory);
  }

  async update<T extends Update>(args: StrictPropertyCheck<T, Update>) {
    const updatedItemCompletedHistory = await this.prismaService.itemCompletedHistory.update(args);

    return new ItemCompletedHistory(updatedItemCompletedHistory);
  }

  async delete<T extends Delete>(args: StrictPropertyCheck<T, Delete>) {
    const deletedItemCompletedHistory = await this.prismaService.itemCompletedHistory.delete(args);

    return new ItemCompletedHistory(deletedItemCompletedHistory);
  }
}
