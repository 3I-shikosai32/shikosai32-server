import { Test } from '@nestjs/testing';
import { MockedCharacterStatusRepository } from '../repository/mocked-character-status.repository';
import { CharacterStatusReaderUseCase } from './character-status-reader.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';

describe('CharacterStatusReaderUseCase', () => {
  let mockedCharacterStatusRepository: MockedCharacterStatusRepository;
  let characterStatusReaderUseCase: CharacterStatusReaderUseCase;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [{ provide: InjectionToken.CHARACTER_STATUS_REPOSITORY, useClass: MockedCharacterStatusRepository }, CharacterStatusReaderUseCase],
    }).compile();

    mockedCharacterStatusRepository = moduleRef.get(InjectionToken.GIFT_HISTORY_REPOSITORY);
    characterStatusReaderUseCase = moduleRef.get(CharacterStatusReaderUseCase);
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
