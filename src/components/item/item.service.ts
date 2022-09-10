import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import PrismaService from '@/libs/prisma/prisma.service';
import StrictPropertyCheck from '@/types/strictPropertyCheck';

type FindUnique = {
  where: Prisma.ItemWhereUniqueInput;
};
type FindMany = {
  where?: Prisma.ItemWhereInput;
  skip?: number;
  take?: number;
  cursor?: Prisma.ItemWhereUniqueInput;
  orderBy?: Prisma.ItemOrderByWithAggregationInput[];
  distinct?: Prisma.ItemScalarFieldEnum[];
};
type Create = {
  data: Prisma.ItemCreateInput;
};
type Update = {
  where: Prisma.ItemWhereUniqueInput;
  data: Prisma.ItemUpdateInput;
};
type Delete = {
  where: Prisma.ItemWhereUniqueInput;
};

@Injectable()
export default class ItemService {
  constructor(private prismaService: PrismaService) {}

  async findUnique<T extends FindUnique>(args: StrictPropertyCheck<T, FindUnique>) {
    return this.prismaService.item.findUnique({
      ...args,
      include: {
        users: {
          include: {
            items: true,
          },
        },
      },
    });
  }

  async findMany<T extends FindMany>(args?: StrictPropertyCheck<T, FindMany>) {
    return this.prismaService.item.findMany({
      ...args,
      include: {
        users: {
          include: {
            items: true,
          },
        },
      },
    });
  }

  async create<T extends Create>(args: StrictPropertyCheck<T, Create>) {
    return this.prismaService.item.create({
      ...args,
      include: {
        users: {
          include: {
            items: true,
          },
        },
      },
    });
  }

  async update<T extends Update>(args: StrictPropertyCheck<T, Update>) {
    return this.prismaService.item.update({
      ...args,
      include: {
        users: {
          include: {
            items: true,
          },
        },
      },
    });
  }

  async delete<T extends Delete>(args: StrictPropertyCheck<T, Delete>) {
    return this.prismaService.item.delete({
      ...args,
      include: {
        users: {
          include: {
            items: true,
          },
        },
      },
    });
  }
}
