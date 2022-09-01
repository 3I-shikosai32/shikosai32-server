import { Injectable } from '@nestjs/common';
import PrismaService from '@/libs/prisma/prisma.service';

@Injectable()
export default class UserService {
  constructor(private prismaService: PrismaService) {}
}
