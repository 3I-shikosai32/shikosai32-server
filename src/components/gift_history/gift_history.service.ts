import { Injectable } from '@nestjs/common';
import PrismaService from '@/libs/prisma/prisma.service';

@Injectable()
export default class GiftHistoryService {
  constructor(private prismaService: PrismaService) {}
}
