import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import PrismaService from '@/libs/prisma/prisma.service';

@Injectable()
export default class UserService {
  constructor(private prismaService: PrismaService) {}

  async findUnique(args: { where: Prisma.UserWhereUniqueInput }) {
    return this.prismaService.user.findUnique({
      ...args,
      include: {
        items: {
          include: {
            users: true,
          },
        },
        giftHistories: {
          include: {
            exchangedGift: true,
          },
        },
      },
    });
  }

  async findMany(args?: {
    where?: Prisma.UserWhereInput;
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput[];
    distinct?: Prisma.UserScalarFieldEnum[];
  }) {
    return this.prismaService.user.findMany({
      ...args,
      include: {
        items: {
          include: {
            users: true,
          },
        },
        giftHistories: {
          include: {
            exchangedGift: true,
          },
        },
      },
    });
  }

  async create(args: { data: Prisma.UserCreateInput }) {
    return this.prismaService.user.create({
      ...args,
      include: {
        items: {
          include: {
            users: true,
          },
        },
        giftHistories: {
          include: {
            exchangedGift: true,
          },
        },
      },
    });
  }

  async update(args: { where: Prisma.UserWhereUniqueInput; data: Prisma.UserUpdateInput }) {
    return this.prismaService.user.update({
      ...args,
      include: {
        items: {
          include: {
            users: true,
          },
        },
        giftHistories: {
          include: {
            exchangedGift: true,
          },
        },
      },
    });
  }

  async delete(args: { where: Prisma.UserWhereUniqueInput }) {
    const deleteGiftHistories = this.prismaService.giftHistory.deleteMany({ where: { userId: args?.where.id } });
    const deleteUser = this.prismaService.user.delete({
      ...args,
      include: {
        items: {
          include: {
            users: true,
          },
        },
        giftHistories: {
          include: {
            exchangedGift: true,
          },
        },
      },
    });

    const [, deletedUser] = await this.prismaService.$transaction([deleteGiftHistories, deleteUser]);

    return deletedUser;
  }
}
