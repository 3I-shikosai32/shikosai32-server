import { Injectable } from '@nestjs/common';
import { Create, Delete, FindMany, FindUnique, ItemRepositoryInterface, Update } from '../domain/service/repository/item.repository';
import { StrictPropertyCheck } from '@/common/type/strict-property-check.type';
import { PrismaService } from '@/infra/prisma/prisma.service';

@Injectable()
export class ItemRepository implements ItemRepositoryInterface {
  constructor(private readonly prismaService: PrismaService) {}

  async findUnique<T extends FindUnique>(args: StrictPropertyCheck<T, FindUnique>) {
    const foundItem = await this.prismaService.item.findUnique({
      ...args,
      include: {
        users: {
          include: {
            items: true,
          },
        },
      },
    });

    return foundItem;
  }

  async findMany<T extends FindMany>(args: StrictPropertyCheck<T, FindMany>) {
    const foundItems = await this.prismaService.item.findMany({
      ...args,
      include: {
        users: {
          include: {
            items: true,
          },
        },
      },
    });

    return foundItems;
  }

  async create<T extends Create>(args: StrictPropertyCheck<T, Create>) {
    const createdItem = await this.prismaService.item.create({
      ...args,
      include: {
        users: {
          include: {
            items: true,
          },
        },
      },
    });

    return createdItem;
  }

  async update<T extends Update>(args: StrictPropertyCheck<T, Update>) {
    const updatedItem = await this.prismaService.item.update({
      ...args,
      include: {
        users: {
          include: {
            items: true,
          },
        },
      },
    });

    return updatedItem;
  }

  async delete<T extends Delete>(args: StrictPropertyCheck<T, Delete>) {
    const deleteItem = await this.prismaService.item.delete({
      ...args,
      include: {
        users: {
          include: {
            items: true,
          },
        },
      },
    });

    return deleteItem;
  }
}
