import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import PrismaService from '@/libs/prisma/prisma.service';

@Injectable()
export default class ItemService {
  constructor(private prismaService: PrismaService) {}

  async findUnique(args: { where: Prisma.ItemWhereUniqueInput }) {
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

  async findMany(args?: {
    where?: Prisma.ItemWhereInput;
    skip?: number;
    take?: number;
    cursor?: Prisma.ItemWhereUniqueInput;
    orderBy?: Prisma.ItemOrderByWithAggregationInput[];
    distinct?: Prisma.ItemScalarFieldEnum[];
  }) {
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

  async create(args: { data: Prisma.ItemCreateInput }) {
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

  async update(args: { where: Prisma.ItemWhereUniqueInput; data: Prisma.ItemUpdateInput }) {
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

  async delete(args: { where: Prisma.ItemWhereUniqueInput }) {
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
