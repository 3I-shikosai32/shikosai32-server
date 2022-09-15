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

  test('updateUser', async () => {
    const expectUser = await mockedUserRepository.update();

    const updatedUser = await userUpdaterUseCase.updateUser({ where: { id: expectUser.id }, data: expectUser });

    expect(updatedUser).toEqual(expectUser);
  });

  test('incrementPoint', async () => {
    const expectUser = await mockedUserRepository.update();

    const incrementedUsers = await userUpdaterUseCase.incrementPoint({ users: [{ id: expectUser.id, increment: 10 }] }, false);

    expect(incrementedUsers).toEqual(expect.arrayContaining([expectUser]));
  });
});
