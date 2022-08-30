import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import PrismaService from '@/libs/prisma/prisma.service';

export default class MockContext {
  prisma: DeepMockProxy<PrismaService>;

  constructor() {
    this.prisma = mockDeep<PrismaService>();
  }
}
