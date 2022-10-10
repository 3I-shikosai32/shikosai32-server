import { Test } from '@nestjs/testing';
import { MockedCharacterStatusRepository } from '../repository/mocked-character-status.repository';
import { CharacterStatusDeliveryManagerUseCase } from './character-status-delivery-manager.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';

describe('CharacterStatusDeliveryManagerUseCase', () => {
  let mockedCharacterStatusRepository: MockedCharacterStatusRepository;
  let characterStatusDeliveryManagerUseCase: CharacterStatusDeliveryManagerUseCase;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        { provide: InjectionToken.CHARACTER_STATUS_REPOSITORY, useClass: MockedCharacterStatusRepository },
        CharacterStatusDeliveryManagerUseCase,
      ],
    }).compile();

    mockedCharacterStatusRepository = moduleRef.get(InjectionToken.CHARACTER_STATUS_REPOSITORY);
    characterStatusDeliveryManagerUseCase = moduleRef.get(CharacterStatusDeliveryManagerUseCase);
  });

  test('changeDeliveryStatus', async () => {
    const expectCharacterStatus = await mockedCharacterStatusRepository.update();

    const updatedCharacterStatus = await characterStatusDeliveryManagerUseCase.changeDeliveryStatus(expectCharacterStatus.id, true);

    expect(updatedCharacterStatus).toEqual(expectCharacterStatus);
  });
});
