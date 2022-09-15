import { Injectable } from '@nestjs/common';
import { Create, Delete, FindMany, FindUnique, GiftHistoryRepositoryInterface, Update } from '../domain/service/repository/gift-history.repository';
import { StrictPropertyCheck } from '@/common/type/strict-property-check.type';
import { PrismaService } from '@/infra/prisma/prisma.service';

@Injectable()
export class GiftHistoryRepository implements GiftHistoryRepositoryInterface {
  constructor(private readonly prismaService: PrismaService) {}

  async findUnique<T extends FindUnique>(args: StrictPropertyCheck<T, FindUnique>) {
    const foundGiftHistory = await this.prismaService.giftHistory.findUnique({
      ...args,
      include: {
        user: {
          include: {
            giftHistories: true,
          },
        },
        exchangedGift: {
          include: {
            giftHistories: true,
          },
        },
      },
    });

    return foundGiftHistory;
  }

  async findMany<T extends FindMany>(args?: StrictPropertyCheck<T, FindMany>) {
    const foundGiftHistories = await this.prismaService.giftHistory.findMany({
      ...args,
      include: {
        user: {
          include: {
            giftHistories: true,
          },
        },
        exchangedGift: {
          include: {
            giftHistories: true,
          },
        },
      },
    });

    return foundGiftHistories;
  }

  async create<T extends Create>(args: StrictPropertyCheck<T, Create>) {
    const createdGiftHistory = await this.prismaService.giftHistory.create({
      ...args,
      include: {
        user: {
          include: {
            giftHistories: true,
          },
        },
        exchangedGift: {
          include: {
            giftHistories: true,
          },
        },
      },
    });

    return createdGiftHistory;
  }

  async update<T extends Update>(args: StrictPropertyCheck<T, Update>) {
    const updatedGiftHistory = await this.prismaService.giftHistory.update({
      ...args,
      include: {
        user: {
          include: {
            giftHistories: true,
          },
        },
        exchangedGift: {
          include: {
            giftHistories: true,
          },
        },
      },
    });

    return updatedGiftHistory;
  }

  async delete<T extends Delete>(args: StrictPropertyCheck<T, Delete>) {
    const deletedGiftHistory = await this.prismaService.giftHistory.delete({
      ...args,
      include: {
        user: {
          include: {
            giftHistories: true,
          },
        },
        exchangedGift: {
          include: {
            giftHistories: true,
          },
        },
      },
    });

    return deletedGiftHistory;
  }
}
