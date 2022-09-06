import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import PrismaService from '@/libs/prisma/prisma.service';

@Injectable()
export default class ItemService {
  constructor(private prismaService: PrismaService) {}

  async findUnique(args: { where: Prisma.ItemWhereUniqueInput }) {
    return this.prismaService.item.findUnique({
      ...args,
    });
  }

  async findMany(args?:{
    where?: Prisma.ItemWhereInput;
  }) {
    return this.prismaService.item.findMany(args);
  }

  async create(args: { data: Prisma.ItemCreateInput }) {
    return this.prismaService.item.create({
      ...args,
    });
  }

  async update(args: { where: Prisma.ItemWhereUniqueInput; data: Prisma.ItemUpdateInput }) {
    return this.prismaService.item.update({
      ...args,
    })
  }

  async delete(args: { where: Prisma.ItemWhereUniqueInput }) {
    return this.prismaService.item.delete({
      ...args,
    });
  }
}
