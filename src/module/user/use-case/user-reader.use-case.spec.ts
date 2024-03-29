import { Test } from '@nestjs/testing';
import { RankingPeriod } from '../controller/dto/enum/date.enum';
import { RankingTarget } from '../controller/dto/enum/ranking-target.enum';
import { GameAttenders } from '../domain/model/game-attenders.model';
import { ObtainmentStatus } from '../domain/model/obtainment-status.model';
import { Ranking } from '../domain/model/ranking.model';
import { MockedUserRepository } from '../repository/mocked-user.repository';
import { UserReaderUseCase } from './user-reader.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';
import { MockedCharacterStatusRepository } from '~/character-status/repository/mocked-character-status.repository';
import { MockedItemRepository } from '~/item/repository/mocked-item.repository';

describe('UserReaderUseCase', () => {
  let mockedUserRepository: MockedUserRepository;
  let userReaderUseCase: UserReaderUseCase;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        { provide: InjectionToken.USER_REPOSITORY, useClass: MockedUserRepository },
        { provide: InjectionToken.CHARACTER_STATUS_REPOSITORY, useClass: MockedCharacterStatusRepository },
        { provide: InjectionToken.ITEM_REPOSITORY, useClass: MockedItemRepository },
        UserReaderUseCase,
      ],
    }).compile();

    mockedUserRepository = moduleRef.get(InjectionToken.USER_REPOSITORY);
    userReaderUseCase = moduleRef.get(UserReaderUseCase);
  });

  test('findUser', async () => {
    const expectUser = await mockedUserRepository.findUnique();

    const foundUser = await userReaderUseCase.findUser(expectUser.authId);

    expect(foundUser).toEqual(expectUser);
  });

  test('findUsers', async () => {
    const expectUser = await mockedUserRepository.findMany();

    const foundUsers = await userReaderUseCase.findUsers({ name: { equals: expectUser[0].name } });

    expect(foundUsers).toEqual(expectUser);
  });

  test('getObtainmentStatuses', async () => {
    const foundUser = await mockedUserRepository.findUnique();
    const obtainmentStatuses = await userReaderUseCase.getObtainmentStatuses(foundUser.authId);

    expect(obtainmentStatuses).toEqual(expect.any(Array<ObtainmentStatus>));
  });

  test('getRankingPosition', async () => {
    const foundUser = await mockedUserRepository.findUnique();
    const rankingPosition = await userReaderUseCase.getRankingPosition(foundUser.authId, RankingPeriod.DAY1);

    expect(rankingPosition).toEqual(expect.any(Number));
  });

  test('getRanking', async () => {
    const rankedUsers = await userReaderUseCase.getRanking(RankingTarget.CAT, RankingPeriod.DAY1);

    expect(rankedUsers).toEqual(expect.any(Array<Ranking>));
  });

  test('getGameAttenders', async () => {
    const gameAttenders = await userReaderUseCase.getGameAttenders();

    expect(gameAttenders).toEqual(expect.any(GameAttenders));
  });
});
