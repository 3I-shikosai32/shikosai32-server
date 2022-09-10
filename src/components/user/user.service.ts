import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import PrismaService from '@/libs/prisma/prisma.service';
import StrictPropertyCheck from '@/types/strictPropertyCheck';

type FindUnique = {
  where: Prisma.UserWhereUniqueInput;
};
type FindMany = {
  where?: Prisma.UserWhereInput;
  skip?: number;
  take?: number;
  cursor?: Prisma.UserWhereUniqueInput;
  orderBy?: Prisma.UserOrderByWithAggregationInput[];
  distinct?: Prisma.UserScalarFieldEnum[];
};
type Create = {
  data: Prisma.UserCreateInput;
};
type Update = {
  where: Prisma.UserWhereUniqueInput;
  data: Prisma.UserUpdateInput;
};
type Delete = {
  where: Prisma.UserWhereUniqueInput;
};

@Injectable()
export default class UserService {
  constructor(private prismaService: PrismaService) {}

  async findUnique<T extends FindUnique>(args: StrictPropertyCheck<T, FindUnique>) {
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

  async findMany<T extends FindMany>(args?: StrictPropertyCheck<T, FindMany>) {
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

  async create<T extends Create>(args: StrictPropertyCheck<T, Create>) {
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

  async update<T extends Update>(args: StrictPropertyCheck<T, Update>) {
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

  async delete<T extends Delete>(args: StrictPropertyCheck<T, Delete>) {
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
