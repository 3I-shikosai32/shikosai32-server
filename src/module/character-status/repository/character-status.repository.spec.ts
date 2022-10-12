import { Test } from '@nestjs/testing';
import { Character } from '@prisma/client';
import dotenv from 'dotenv';
import { CharacterStatus } from '../domain/model/character-status.model';
import { CharacterStatusRepository } from './character-status.repository';
import { PrismaService } from '@/infra/prisma/prisma.service';
import { createUser, deleteUser } from '~/user/repository/user.repository.spec';

dotenv.config();
dotenv.config({ path: '.env.test' });

jest.setTimeout(15000);

export const createCharacterStatus = async (prismaService: PrismaService, userId: string) => {
  const createdCharacterStatus = await prismaService.characterStatus.create({
    data: {
      character: Character.CAT,
      iconUrl: 'https://example.com',
      avatarUrl: 'https://example.com',
      isActive: true,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });

  return new CharacterStatus(createdCharacterStatus);
};

export const deleteCharacterStatus = async (prismaService: PrismaService, characterStatusId: string) => {
  const deletedCharacterStatus = await prismaService.characterStatus.delete({
    where: { id: characterStatusId },
  });

  return new CharacterStatus(deletedCharacterStatus);
};

describe('CharacterStatusRepository', () => {
  let prismaService: PrismaService;
  let characterStatusRepository: CharacterStatusRepository;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [PrismaService, CharacterStatusRepository],
    }).compile();

    prismaService = moduleRef.get(PrismaService);
    characterStatusRepository = moduleRef.get(CharacterStatusRepository);
  });

  test('findUnique', async () => {
    const createdUser = await createUser(prismaService);
    const createdCharacterStatus = await createCharacterStatus(prismaService, createdUser.id);

    const foundCharacterStatus = await characterStatusRepository.findUnique({ where: { id: createdCharacterStatus.id } });

    expect(foundCharacterStatus).toEqual(createdCharacterStatus);

    await deleteCharacterStatus(prismaService, createdCharacterStatus.id);
    await deleteUser(prismaService, createdUser.id);
  });

  test('findMany', async () => {
    const createdUser = await createUser(prismaService);
    const createdCharacterStatus = await createCharacterStatus(prismaService, createdUser.id);

    const foundCharacterStatuss = await characterStatusRepository.findMany({ where: { character: Character.CAT } });

    expect(foundCharacterStatuss).toEqual(expect.any(Array<CharacterStatus>));

    await deleteCharacterStatus(prismaService, createdCharacterStatus.id);
    await deleteUser(prismaService, createdUser.id);
  });

  test('create', async () => {
    const createdUser = await createUser(prismaService);
    const createdCharacterStatus = await prismaService.characterStatus.create({
      data: {
        character: Character.CAT,
        iconUrl: 'https://example.com',
        avatarUrl: 'https://example.com',
        isActive: true,
        user: {
          connect: {
            id: createdUser.id,
          },
        },
      },
    });

    const foundCharacterStatus = await prismaService.characterStatus.findUnique({
      where: {
        id: createdCharacterStatus.id,
      },
    });

    expect(createdCharacterStatus).toEqual(foundCharacterStatus);

    await deleteCharacterStatus(prismaService, createdCharacterStatus.id);
    await deleteUser(prismaService, createdUser.id);
  });

  test('update', async () => {
    const createdUser = await createUser(prismaService);
    const createdCharacterStatus = await createCharacterStatus(prismaService, createdUser.id);

    const updatedCharacterStatus = await characterStatusRepository.update({
      where: { id: createdCharacterStatus.id },
      data: { character: Character.CAT },
    });

    expect(updatedCharacterStatus).toEqual({ ...createdCharacterStatus, character: Character.CAT });

    await deleteCharacterStatus(prismaService, createdCharacterStatus.id);
    await deleteUser(prismaService, createdUser.id);
  });

  test('delete', async () => {
    const createdUser = await createUser(prismaService);
    const createdCharacterStatus = await createCharacterStatus(prismaService, createdUser.id);

    const deletedCharacterStatus = await characterStatusRepository.delete({ where: { id: createdCharacterStatus.id } });

    expect(deletedCharacterStatus).toEqual(createdCharacterStatus);

    await deleteUser(prismaService, createdUser.id);
  });

  test('findActiveByUserId', async () => {
    const createdUser = await createUser(prismaService);
    const createdCharacterStatus = await createCharacterStatus(prismaService, createdUser.id);

    const foundCharacterStatus = await characterStatusRepository.findActiveByUserId(createdUser.id);

    expect(foundCharacterStatus).toEqual(createdCharacterStatus);

    await deleteCharacterStatus(prismaService, createdCharacterStatus.id);
    await deleteUser(prismaService, createdUser.id);
  });

  test('findManyWithUser', async () => {
    const createdUser = await createUser(prismaService);
    const createdCharacterStatus = await createCharacterStatus(prismaService, createdUser.id);

    const foundCharacterStatusWithUserList = await characterStatusRepository.findManyWithUser({});

    expect(foundCharacterStatusWithUserList).toEqual([[createdCharacterStatus, createdUser]]);

    await deleteCharacterStatus(prismaService, createdCharacterStatus.id);
    await deleteUser(prismaService, createdUser.id);
  });
});
