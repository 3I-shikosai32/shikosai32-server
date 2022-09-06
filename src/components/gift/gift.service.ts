import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import PrismaService from '@/libs/prisma/prisma.service';

@Injectable()
export default class GiftService {
  constructor(private prismaService: PrismaService) {}

  async findUnique(args: { where: Prisma.GiftWhereUniqueInput }) {
    return this.prismaService.gift.findUnique({
      ...args,
      include: {
        giftHistories: {
          include: {
            exchangedGift: true,
          },
        },
      },
    });
  }

  async findMany(args?: {
    where?: Prisma.GiftWhereInput;
    skip?: number;
    take?: number;
    cursor?: Prisma.GiftWhereUniqueInput;
    orderBy?: Prisma.GiftOrderByWithAggregationInput[];
    distinct?: Prisma.GiftScalarFieldEnum[];
  }) {
    return this.prismaService.gift.findMany({
      ...args,
      include: {
        giftHistories: {
          include: {
            exchangedGift: true,
          },
        },
      },
    });
  }

  async create(args: { data: Prisma.GiftCreateInput }) {
    return this.prismaService.gift.create({
      ...args,
      include: {
        giftHistories: {
          include: {
            exchangedGift: true,
          },
        },
      },
    });
  }

  async update(args: { where: Prisma.GiftWhereUniqueInput; data: Prisma.GiftUpdateInput }) {
    return this.prismaService.gift.update({
      ...args,
      include: {
        giftHistories: {
          include: {
            exchangedGift: true,
          },
        },
      },
    });
  }

  async delete(args: { where: Prisma.GiftWhereUniqueInput }) {
    const deleteGiftHistories = this.prismaService.giftHistory.deleteMany({ where: { giftId: args?.where.id } });
    const deleteGift = this.prismaService.gift.delete({
      ...args,
      include: {
        giftHistories: {
          include: {
            exchangedGift: true,
          },
        },
      },
    });

    const [, deletedGift] = await this.prismaService.$transaction([deleteGiftHistories, deleteGift]);

    return deletedGift;
  }
}
