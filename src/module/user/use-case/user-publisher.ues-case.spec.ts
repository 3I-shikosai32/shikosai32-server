import { Test } from '@nestjs/testing';
import { GameAttenders } from '../domain/model/game-attenders.model';
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

  test('publishUpdatedGameAttenders', async () => {
    const gameAttenders = await userPublisherUseCase.publishUpdatedGameAttenders();

    expect(gameAttenders).toEqual(expect.any(GameAttenders));
  });
});
