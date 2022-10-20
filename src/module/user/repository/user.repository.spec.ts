import { Test } from '@nestjs/testing';
import dotenv from 'dotenv';
import { v4 as uuid } from 'uuid';
import { User } from '../domain/model/user.model';
import { UserRepository } from './user.repository';
import { PrismaService } from '@/infra/prisma/prisma.service';
import { createCharacterStatus, deleteCharacterStatus } from '~/character-status/repository/character-status.repository.spec';
import { Item } from '~/item/domain/model/item.model';

dotenv.config();
dotenv.config({ path: '.env.test' });

jest.setTimeout(15000);

export const createUser = async (prismaService: PrismaService) => {
  const createdUser = await prismaService.user.create({
    data: {
      name: 'test user',
      email: 'test@example.com',
      authId: uuid(),
    },
  });

  return new User(createdUser);
};

export const deleteUser = async (prismaService: PrismaService, userId: string) => {
  const deletedUser = await prismaService.user.delete({
    where: { id: userId },
  });

  return new User(deletedUser);
};

describe('UserRepository', () => {
  let prismaService: PrismaService;
  let userRepository: UserRepository;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [PrismaService, UserRepository],
    }).compile();

    prismaService = moduleRef.get(PrismaService);
    userRepository = moduleRef.get(UserRepository);
  });

  test('findUnique', async () => {
    const createdUser = await createUser(prismaService);

    const foundUser = await userRepository.findUnique({ where: { id: createdUser.id } });

    expect(foundUser).toEqual(createdUser);

    await deleteUser(prismaService, createdUser.id);
  });

  test('findMany', async () => {
    const createdUser = await createUser(prismaService);

    const foundUsers = await userRepository.findMany({ where: { name: createdUser.name } });

    expect(foundUsers).toEqual(expect.any(Array<User>));

    await deleteUser(prismaService, createdUser.id);
  });

  test('create', async () => {
    const createdUser = await userRepository.create({
      data: {
        name: 'test user',
        email: 'test@example.com',
        authId: uuid(),
      },
    });

    const foundUser = await prismaService.user.findUnique({
      where: {
        id: createdUser.id,
      },
    });

    expect(createdUser).toEqual(foundUser);

    await deleteUser(prismaService, createdUser.id);
  });

  test('update', async () => {
    const createdUser = await createUser(prismaService);

    const updatedUser = await userRepository.update({
      where: { id: createdUser.id },
      data: { name: 'updated test user' },
    });

    expect(updatedUser).toEqual({ ...createdUser, name: 'updated test user' });

    await deleteUser(prismaService, createdUser.id);
  });

  test('delete', async () => {
    const createdUser = await createUser(prismaService);

    const deletedUser = await userRepository.delete({ where: { id: createdUser.id } });

    expect(deletedUser).toEqual(createdUser);
  });

  test('findUniqueWithRelations', async () => {
    const createdUser = await createUser(prismaService);
    const createdCharacterStatus = await createCharacterStatus(prismaService, createdUser.id);

    const foundUser = await userRepository.findUniqueWithRelations({
      where: { id: createdUser.id },
    });

    expect(foundUser).toEqual([createdUser, createdCharacterStatus, expect.any(Array<Item>)]);

    await deleteCharacterStatus(prismaService, createdCharacterStatus.id);
    await deleteUser(prismaService, createdUser.id);
  });
});
