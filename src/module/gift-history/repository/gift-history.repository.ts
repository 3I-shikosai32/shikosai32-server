import { Injectable } from '@nestjs/common';
import { GiftHistory } from '../domain/model/gift-history.model';
import { Create, Delete, FindMany, FindUnique, GiftHistoryRepositoryInterface, Update } from '../domain/service/repository/gift-history.repository';
import { StrictPropertyCheck } from '@/common/type/strict-property-check.type';
import { PrismaService } from '@/infra/prisma/prisma.service';

@Injectable()
export class GiftHistoryRepository implements GiftHistoryRepositoryInterface {
  constructor(private readonly prismaService: PrismaService) {}

  async findUnique<T extends FindUnique>(args: StrictPropertyCheck<T, FindUnique>) {
    const foundGiftHistory = await this.prismaService.giftHistory.findUnique(args);

    return foundGiftHistory ? new GiftHistory(foundGiftHistory) : null;
  }

  async findMany<T extends FindMany>(args?: StrictPropertyCheck<T, FindMany>) {
    const foundGiftHistories = await this.prismaService.giftHistory.findMany(args);

    return foundGiftHistories.map((foundGiftHistory) => new GiftHistory(foundGiftHistory));
  }

  async create<T extends Create>(args: StrictPropertyCheck<T, Create>) {
    const createdGiftHistory = await this.prismaService.giftHistory.create(args);

    return new GiftHistory(createdGiftHistory);
  }

  async update<T extends Update>(args: StrictPropertyCheck<T, Update>) {
    const updatedGiftHistory = await this.prismaService.giftHistory.update(args);

    return new GiftHistory(updatedGiftHistory);
  }

  async delete<T extends Delete>(args: StrictPropertyCheck<T, Delete>) {
    const deletedGiftHistory = await this.prismaService.giftHistory.delete(args);

    return new GiftHistory(deletedGiftHistory);
  }

  async createMany<T extends Create>(argsList: Array<StrictPropertyCheck<T, Create>>) {
    const createdGiftHistories = await this.prismaService.$transaction(argsList.map((args) => this.prismaService.giftHistory.create(args)));

    return createdGiftHistories.map((createdGiftHistory) => new GiftHistory(createdGiftHistory));
  }
}
