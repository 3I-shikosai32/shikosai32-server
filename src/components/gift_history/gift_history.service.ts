import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import PrismaService from '@/libs/prisma/prisma.service';
import StrictPropertyCheck from '@/types/strictPropertyCheck';

type FindUnique = {
  where: Prisma.GiftHistoryWhereUniqueInput;
};
type FindMany = {
  where?: Prisma.GiftHistoryWhereInput;
  skip?: number;
  take?: number;
  cursor?: Prisma.GiftHistoryWhereUniqueInput;
  orderBy?: Prisma.GiftHistoryOrderByWithAggregationInput[];
  distinct?: Prisma.GiftHistoryScalarFieldEnum[];
};
type Create = {
  data: Prisma.GiftHistoryCreateInput;
};
type Update = {
  where: Prisma.GiftHistoryWhereUniqueInput;
  data: Prisma.GiftHistoryUpdateInput;
};
type Delete = {
  where: Prisma.GiftHistoryWhereUniqueInput;
};

@Injectable()
export default class GiftHistoryService {
  constructor(private prismaService: PrismaService) {}

  async findUnique<T extends FindUnique>(args: StrictPropertyCheck<T, FindUnique>) {
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

  async findMany<T extends FindMany>(args?: StrictPropertyCheck<T, FindMany>) {
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

  async create<T extends Create>(args: StrictPropertyCheck<T, Create>) {
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

  async update<T extends Update>(args: StrictPropertyCheck<T, Update>) {
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

  async delete<T extends Delete>(args: StrictPropertyCheck<T, Delete>) {
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
