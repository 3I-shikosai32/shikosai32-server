import { Injectable } from '@nestjs/common';
import { Gift } from '../domain/model/gift.model';
import { Create, Delete, FindMany, FindUnique, GiftRepositoryInterface, Update } from '../domain/service/repository/gift.repository';
import { StrictPropertyCheck } from '@/common/type/strict-property-check.type';
import { PrismaService } from '@/infra/prisma/prisma.service';

@Injectable()
export class GiftRepository implements GiftRepositoryInterface {
  constructor(private readonly prismaService: PrismaService) {}

  async findUnique<T extends FindUnique>(args: StrictPropertyCheck<T, FindUnique>) {
    const foundGift = await this.prismaService.gift.findUnique(args);

    return foundGift ? new Gift(foundGift) : null;
  }

  async findMany<T extends FindMany>(args?: StrictPropertyCheck<T, FindMany>) {
    const foundGifts = await this.prismaService.gift.findMany(args);

    return foundGifts.map((foundGift) => new Gift(foundGift));
  }

  async create<T extends Create>(args: StrictPropertyCheck<T, Create>) {
    const createdGift = await this.prismaService.gift.create(args);

    return new Gift(createdGift);
  }

  async update<T extends Update>(args: StrictPropertyCheck<T, Update>) {
    const updatedGift = await this.prismaService.gift.update(args);

    return new Gift(updatedGift);
  }

  async delete<T extends Delete>(args: StrictPropertyCheck<T, Delete>) {
    const deleteGiftHistories = this.prismaService.giftHistory.deleteMany({ where: { giftId: args.where.id } });
    const deleteGift = this.prismaService.gift.delete(args);

    const [, deletedGift] = await this.prismaService.$transaction([deleteGiftHistories, deleteGift]);

    return new Gift(deletedGift);
  }
}
