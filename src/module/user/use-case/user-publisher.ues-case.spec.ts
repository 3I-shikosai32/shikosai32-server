import { Test } from '@nestjs/testing';
import { RankingTarget } from '../controller/dto/enum/ranking-target.enum';
import { GameAttenders } from '../domain/model/game-attenders.model';
import { User } from '../domain/model/user.model';
import { MockedUserRepository } from '../repository/mocked-user.repository';
import { UserPublisherUseCase } from './user-publisher.ues-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';
import { PubSubService } from '@/infra/pubsub/pubsub.service';

describe('UserPublisherUseCase', () => {
  let userPublisherUseCase: UserPublisherUseCase;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [PubSubService, { provide: InjectionToken.USER_REPOSITORY, useClass: MockedUserRepository }, UserPublisherUseCase],
    }).compile();

    userPublisherUseCase = moduleRef.get(UserPublisherUseCase);
  });

  test('publishRanking', async () => {
    const rankedUsers = await userPublisherUseCase.publishRanking(RankingTarget.CAT, true);

    expect(rankedUsers).toEqual(expect.any(Array<User>));
  });

  test('publishUpdatedGameAttenders', async () => {
    const gameAttenders = await userPublisherUseCase.publishUpdatedGameAttenders();

    expect(gameAttenders).toEqual(expect.any(GameAttenders));
  });
});
