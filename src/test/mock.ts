import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import PrismaService from '../libs/prisma/prisma.service';

export default class MockContext {
  prisma: DeepMockProxy<PrismaService>;

  constructor() {
    this.prisma = mockDeep<PrismaService>();
  }
}

export type MockedType<T> = DeepMockProxy<T>;

const mock = <T>(): DeepMockProxy<T> => mockDeep<T>();

export { mock };
