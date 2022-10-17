import { Inject, Injectable } from '@nestjs/common';
import { Date } from '../controller/dto/enum/date.enum';
import { RankingTarget } from '../controller/dto/enum/ranking-target.enum';
import { GameAttenders } from '../domain/model/game-attenders.model';
import { User } from '../domain/model/user.model';
import { UserRepositoryInterface } from '../domain/service/repository/user.repository';
import { UserPublisherUseCaseInterface } from '../domain/service/use-case/user-publisher.ues-case';
import { UserReaderUseCaseInterface } from '../domain/service/use-case/user-reader.use-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';
import { generateUpdatedRankingTrigger, PubSubTrigger } from '@/common/constant/pubsub-iterator.constant';
import { PubSubService } from '@/infra/pubsub/pubsub.service';

@Injectable()
export class UserPublisherUseCase implements UserPublisherUseCaseInterface {
  constructor(
    @Inject(InjectionToken.USER_REPOSITORY)
    private readonly userRepository: UserRepositoryInterface,
    @Inject(InjectionToken.USER_READER_USE_CASE)
    private readonly userReaderUseCase: UserReaderUseCaseInterface,
    private readonly pubSubService: PubSubService,
  ) {}

  async publishRanking(rankingTarget: RankingTarget, isBeforeDay2: boolean): Promise<User[]> {
    const updatedRanking = await this.userReaderUseCase.getRanking(rankingTarget, isBeforeDay2 ? Date.DAY1 : Date.DAY2, 30);

    await this.pubSubService.publish(generateUpdatedRankingTrigger(rankingTarget, isBeforeDay2 ? Date.DAY1 : Date.DAY2), { updatedRanking });

    return updatedRanking;
  }

  async publishUpdatedGameAttenders() {
    const updatedGameAttenders = await this.userReaderUseCase.getGameAttenders();

    await this.pubSubService.publish(PubSubTrigger.UPDATED_GAME_ATTENDERS, { updatedGameAttenders });

    return new GameAttenders(updatedGameAttenders);
  }
}
