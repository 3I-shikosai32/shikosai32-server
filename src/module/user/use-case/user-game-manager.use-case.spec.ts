import { Test } from '@nestjs/testing';
import { Game } from '@prisma/client';
import { MockedUserRepository } from '../repository/mocked-user.repository';
import { UserGameManagerUseCase } from './user-game-manager.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';

describe('UserGameManagerUseCase', () => {
  let mockedUserRepository: MockedUserRepository;
  let userGameManagerUseCase: UserGameManagerUseCase;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [{ provide: InjectionToken.USER_REPOSITORY, useClass: MockedUserRepository }, UserGameManagerUseCase],
    }).compile();

    mockedUserRepository = moduleRef.get(InjectionToken.USER_REPOSITORY);
    userGameManagerUseCase = moduleRef.get(UserGameManagerUseCase);
  });

  test('joinGame', async () => {
    const expectUser = await mockedUserRepository.update();

    const joinedUser = await userGameManagerUseCase.joinGame({ where: { id: expectUser.id }, game: Game.COIN_DROPPING });

    expect(joinedUser).toEqual(expectUser);
  });

  test('exitGame', async () => {
    const expectUser = await mockedUserRepository.update();

    const exitedUser = await userGameManagerUseCase.exitGame({ where: { id: expectUser.id } });

    expect(exitedUser).toEqual(expectUser);
  });
});
