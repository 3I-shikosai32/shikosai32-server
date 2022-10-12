import { Test } from '@nestjs/testing';
import { MockedUserRepository } from '../repository/mocked-user.repository';
import { UserUpdaterUseCase } from './user-updater.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';

describe('UserUpdaterUseCase', () => {
  let mockedUserRepository: MockedUserRepository;
  let userUpdaterUseCase: UserUpdaterUseCase;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [{ provide: InjectionToken.USER_REPOSITORY, useClass: MockedUserRepository }, UserUpdaterUseCase],
    }).compile();

    mockedUserRepository = moduleRef.get(InjectionToken.USER_REPOSITORY);
    userUpdaterUseCase = moduleRef.get(UserUpdaterUseCase);
  });

  test('updateUserBio', async () => {
    const expectUser = await mockedUserRepository.update();

    const updatedUser = await userUpdaterUseCase.updateUserBio(expectUser.id, expectUser);

    expect(updatedUser).toEqual(expectUser);
  });
});
