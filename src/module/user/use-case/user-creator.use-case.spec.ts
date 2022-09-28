import { Test } from '@nestjs/testing';
import { MockedUserRepository } from '../repository/mocked-user.repository';
import { UserCreatorUseCase } from './user-creator.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';
import { MockedItemRepository } from '~/item/repository/mocked-item.repository';

describe('UserCreatorUseCase', () => {
  let mockedUserRepository: MockedUserRepository;
  let userCreatorUseCase: UserCreatorUseCase;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        { provide: InjectionToken.USER_REPOSITORY, useClass: MockedUserRepository },
        { provide: InjectionToken.ITEM_REPOSITORY, useClass: MockedItemRepository },
        UserCreatorUseCase,
      ],
    }).compile();

    mockedUserRepository = moduleRef.get(InjectionToken.USER_REPOSITORY);
    userCreatorUseCase = moduleRef.get(UserCreatorUseCase);
  });

  test('createUser', async () => {
    const expectUser = await mockedUserRepository.create();

    const createdUser = await userCreatorUseCase.createUser(expectUser);

    expect(createdUser).toEqual(expectUser);
  });
});
