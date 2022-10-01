import { Test } from '@nestjs/testing';
import { MockedUserRepository } from '../repository/mocked-user.repository';
import { UserGachaManagerUseCase } from './user-gacha-manager.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';
import { MockedCharacterStatusRepository } from '~/character-status/repository/mocked-character-status';
import { MockedItemRepository } from '~/item/repository/mocked-item.repository';

describe('UserGachaManagerUseCase', () => {
  let mockedUserRepository: MockedUserRepository;
  let userGachaManagerUseCase: UserGachaManagerUseCase;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        { provide: InjectionToken.USER_REPOSITORY, useClass: MockedUserRepository },
        { provide: InjectionToken.CHARACTER_STATUS_REPOSITORY, useClass: MockedCharacterStatusRepository },
        { provide: InjectionToken.ITEM_REPOSITORY, useClass: MockedItemRepository },
        UserGachaManagerUseCase,
      ],
    }).compile();

    mockedUserRepository = moduleRef.get(InjectionToken.USER_REPOSITORY);
    userGachaManagerUseCase = moduleRef.get(UserGachaManagerUseCase);
  });

  test('pullGacha', async () => {
    const expectUser = await mockedUserRepository.findUnique();
    let expectItem;

    const pulledItem = await userGachaManagerUseCase.pullGacha(expectUser.id, (items) => {
      [expectItem] = items;
      return items[0];
    });

    expect(pulledItem).toEqual(expectItem);
  });
});
