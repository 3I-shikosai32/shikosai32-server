import { Injectable } from '@nestjs/common';
import PrismaService from '@/libs/prisma/prisma.service';

@Injectable()
export default class GiftService {
  constructor(private prismaService: PrismaService) {}
}
