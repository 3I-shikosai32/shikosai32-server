import { Test } from '@nestjs/testing';
import { Game } from '@prisma/client';
import { MockedUserRepository } from '../repository/mocked-user.repository';
import { UserGameManagerUseCase } from './user-game-manager.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';
import { MockedCharacterStatusRepository } from '~/character-status/repository/mocked-character-status.repository';

describe('UserGameManagerUseCase', () => {
  let mockedUserRepository: MockedUserRepository;
  let userGameManagerUseCase: UserGameManagerUseCase;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        { provide: InjectionToken.USER_REPOSITORY, useClass: MockedUserRepository },
        { provide: InjectionToken.CHARACTER_STATUS_REPOSITORY, useClass: MockedCharacterStatusRepository },
        UserGameManagerUseCase,
      ],
    }).compile();

    mockedUserRepository = moduleRef.get(InjectionToken.USER_REPOSITORY);
    userGameManagerUseCase = moduleRef.get(UserGameManagerUseCase);
  });

  test('incrementPoint', async () => {
    const expectUser = await mockedUserRepository.update();

    const incrementedUsers = await userGameManagerUseCase.incrementPoint([{ id: expectUser.id, increment: 10 }], false);

    expect(incrementedUsers).toEqual(expect.arrayContaining([expectUser]));
  });

  test('joinGame', async () => {
    const expectUser = await mockedUserRepository.update();

    const joinedUser = await userGameManagerUseCase.joinGame(expectUser.authId, Game.COIN_DROPPING);

    expect(joinedUser).toEqual(expectUser);
  });

  test('exitGame', async () => {
    const expectUser = await mockedUserRepository.update();

    const exitedUser = await userGameManagerUseCase.exitGame(expectUser.id);

    expect(exitedUser).toEqual(expectUser);
  });
});
