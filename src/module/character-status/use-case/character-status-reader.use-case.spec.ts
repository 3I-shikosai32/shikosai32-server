import { Test } from '@nestjs/testing';
import { Character } from '@prisma/client';
import { MockedCharacterStatusRepository } from '../repository/mocked-character-status.repository';
import { CharacterStatusReaderUseCase } from './character-status-reader.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';
import { MockedUserRepository } from '~/user/repository/mocked-user.repository';

describe('CharacterStatusReaderUseCase', () => {
  let mockedUserRepository: MockedUserRepository;
  let mockedCharacterStatusRepository: MockedCharacterStatusRepository;
  let characterStatusReaderUseCase: CharacterStatusReaderUseCase;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        { provide: InjectionToken.USER_REPOSITORY, useClass: MockedUserRepository },
        { provide: InjectionToken.CHARACTER_STATUS_REPOSITORY, useClass: MockedCharacterStatusRepository },
        CharacterStatusReaderUseCase,
      ],
    }).compile();

    mockedUserRepository = moduleRef.get(InjectionToken.USER_REPOSITORY);
    mockedCharacterStatusRepository = moduleRef.get(InjectionToken.CHARACTER_STATUS_REPOSITORY);
    characterStatusReaderUseCase = moduleRef.get(CharacterStatusReaderUseCase);
  });

  test('findIncludeCharacterFromUserIds', async () => {
    const expectUsers = await mockedUserRepository.findMany();

    const foundCharacters = await characterStatusReaderUseCase.findIncludeCharacterFromUserIds(expectUsers.map((user) => user.id));

    expect(foundCharacters).toEqual(expect.any(Array<Character>));
  });

  test('findItemCompletedCharacterStatuses', async () => {
    const expectCharacterStatuses = await mockedCharacterStatusRepository.findMany();

    const foundCharacterStatuses = await characterStatusReaderUseCase.findItemCompletedCharacterStatuses({
      itemCompletedHistory: {
        is: {
          isDelivered: { equals: false },
        },
      },
    });

    expect(foundCharacterStatuses).toEqual(expectCharacterStatuses);
  });
});
