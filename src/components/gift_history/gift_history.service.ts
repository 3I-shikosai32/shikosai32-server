import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import PrismaService from '@/libs/prisma/prisma.service';

@Injectable()
export default class GiftHistoryService {
  constructor(private prismaService: PrismaService) {}

  async findUnique(args: { where: Prisma.GiftHistoryWhereUniqueInput }) {
    return this.prismaService.giftHistory.findUnique({
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
  }

  async findMany(args?: {
    where?: Prisma.GiftHistoryWhereInput;
    skip?: number;
    take?: number;
    cursor?: Prisma.GiftHistoryWhereUniqueInput;
    orderBy?: Prisma.GiftHistoryOrderByWithAggregationInput[];
    distinct?: Prisma.GiftHistoryScalarFieldEnum[];
  }) {
    return this.prismaService.giftHistory.findMany({
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
  }

  async create(args: { data: Prisma.GiftHistoryCreateInput }) {
    return this.prismaService.giftHistory.create({
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
  }

  async update(args: { where: Prisma.GiftHistoryWhereUniqueInput; data: Prisma.GiftHistoryUpdateInput }) {
    return this.prismaService.giftHistory.update({
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
  }

  async delete(args: { where: Prisma.GiftHistoryWhereUniqueInput }) {
    return this.prismaService.giftHistory.delete({
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
  }
}
