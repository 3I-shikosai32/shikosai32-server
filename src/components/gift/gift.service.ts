import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import PrismaService from '@/libs/prisma/prisma.service';
import StrictPropertyCheck from '@/types/strictPropertyCheck';

type FindUnique = {
  where: Prisma.GiftWhereUniqueInput;
};
type FindMany = {
  where?: Prisma.GiftWhereInput;
  skip?: number;
  take?: number;
  cursor?: Prisma.GiftWhereUniqueInput;
  orderBy?: Prisma.GiftOrderByWithAggregationInput[];
  distinct?: Prisma.GiftScalarFieldEnum[];
};
type Create = {
  data: Prisma.GiftCreateInput;
};
type Update = {
  where: Prisma.GiftWhereUniqueInput;
  data: Prisma.GiftUpdateInput;
};
type Delete = {
  where: Prisma.GiftWhereUniqueInput;
};

@Injectable()
export default class GiftService {
  constructor(private prismaService: PrismaService) {}

  async findUnique<T extends FindUnique>(args: StrictPropertyCheck<T, FindUnique>) {
    return this.prismaService.gift.findUnique({
      ...args,
      include: {
        giftHistories: {
          include: {
            user: true,
          },
        },
      },
    });
  }

  async findMany<T extends FindMany>(args?: StrictPropertyCheck<T, FindMany>) {
    return this.prismaService.gift.findMany({
      ...args,
      include: {
        giftHistories: {
          include: {
            user: true,
          },
        },
      },
    });
  }

  async create<T extends Create>(args: StrictPropertyCheck<T, Create>) {
    return this.prismaService.gift.create({
      ...args,
      include: {
        giftHistories: {
          include: {
            user: true,
          },
        },
      },
    });
  }

  async update<T extends Update>(args: StrictPropertyCheck<T, Update>) {
    return this.prismaService.gift.update({
      ...args,
      include: {
        giftHistories: {
          include: {
            user: true,
          },
        },
      },
    });
  }

  async delete<T extends Delete>(args: StrictPropertyCheck<T, Delete>) {
    const deleteGiftHistories = this.prismaService.giftHistory.deleteMany({ where: { giftId: args?.where.id } });
    const deleteGift = this.prismaService.gift.delete({
      ...args,
      include: {
        giftHistories: {
          include: {
            user: true,
          },
        },
      },
    });

    const [, deletedGift] = await this.prismaService.$transaction([deleteGiftHistories, deleteGift]);

    return deletedGift;
  }
}
