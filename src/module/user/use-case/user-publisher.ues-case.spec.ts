import { Test } from '@nestjs/testing';
import { RankingTarget } from '../controller/dto/enum/ranking-target.enum';
import { GameAttenders } from '../domain/model/game-attenders.model';
import { User } from '../domain/model/user.model';
import { MockedUserRepository } from '../repository/mocked-user.repository';
import { UserPublisherUseCase } from './user-publisher.ues-case';
import { UserReaderUseCase } from './user-reader.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';
import { PubSubService } from '@/infra/pubsub/pubsub.service';
import { MockedCharacterStatusRepository } from '~/character-status/repository/mocked-character-status.repository';
import { MockedItemRepository } from '~/item/repository/mocked-item.repository';

describe('UserPublisherUseCase', () => {
  let userPublisherUseCase: UserPublisherUseCase;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        PubSubService,
        { provide: InjectionToken.USER_REPOSITORY, useClass: MockedUserRepository },
        { provide: InjectionToken.CHARACTER_STATUS_REPOSITORY, useClass: MockedCharacterStatusRepository },
        { provide: InjectionToken.ITEM_REPOSITORY, useClass: MockedItemRepository },
        { provide: InjectionToken.USER_READER_USE_CASE, useClass: UserReaderUseCase },
        UserPublisherUseCase,
      ],
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
