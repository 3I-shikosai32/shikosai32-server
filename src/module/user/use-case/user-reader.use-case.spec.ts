import { Test } from '@nestjs/testing';
import { MockedUserRepository } from '../repository/mocked-user.repository';
import { UserReaderUseCase } from './user-reader.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';

describe('UserReaderUseCase', () => {
  let mockedUserRepository: MockedUserRepository;
  let userReaderUseCase: UserReaderUseCase;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [{ provide: InjectionToken.USER_REPOSITORY, useClass: MockedUserRepository }, UserReaderUseCase],
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

  test('findItemsByUserId', async () => {
    const expectItems = await mockedUserRepository.findItemsByUserId();

    const foundUser = await mockedUserRepository.findUnique();
    const foundItems = await userReaderUseCase.findItemsByUserId(foundUser.id);

    expect(foundItems).toEqual(expectItems);
  });

  test('findGiftHistoriesByUserId', async () => {
    const expectGiftHistories = await mockedUserRepository.findGiftHistoriesByUserId();

    const foundUser = await mockedUserRepository.findUnique();
    const foundGiftHistories = await userReaderUseCase.findGiftHistoriesByUserId(foundUser.id);

    expect(foundGiftHistories).toEqual(expectGiftHistories);
  });
});
