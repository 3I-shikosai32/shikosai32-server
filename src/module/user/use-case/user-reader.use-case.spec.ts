import { Test } from '@nestjs/testing';
import { Date } from '../controller/dto/enum/date.enum';
import { RankingTarget } from '../controller/dto/enum/ranking-target.enum';
import { ObtainmentStatus } from '../domain/model/obtainment-status.model';
import { User } from '../domain/model/user.model';
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

    const foundUser = await userReaderUseCase.findUser(expectUser.id);

    expect(foundUser).toEqual(expectUser);
  });

  test('findUsers', async () => {
    const expectUser = await mockedUserRepository.findMany();

    const foundUsers = await userReaderUseCase.findUsers({ name: { equals: expectUser[0].name } });

    expect(foundUsers).toEqual(expectUser);
  });

  test('getObtainmentStatuses', async () => {
    const foundUser = await mockedUserRepository.findUnique();
    const obtainmentStatuses = await userReaderUseCase.getObtainmentStatuses(foundUser.id);

    expect(obtainmentStatuses).toEqual(expect.any(Array<ObtainmentStatus>));
  });

  test('getRanking', async () => {
    const rankedUsers = await userReaderUseCase.getRanking(RankingTarget.CAT, Date.DAY1);

    expect(rankedUsers).toEqual(expect.any(Array<User>));
  });
});
