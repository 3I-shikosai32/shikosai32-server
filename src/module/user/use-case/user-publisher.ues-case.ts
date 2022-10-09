import { Inject, Injectable } from '@nestjs/common';
import { Game } from '@prisma/client';
import { GameAttenders } from '../domain/model/game-attenders.model';
import { UserRepositoryInterface } from '../domain/service/repository/user.repository';
import { UserPublisherUseCaseInterface } from '../domain/service/use-case/user-publisher.ues-case';
import { InjectionToken } from '@/common/constant/injection-token.constant';
import { PubSubTrigger } from '@/common/constant/pubsub-iterator.constant';
import { PubSubService } from '@/infra/pubsub/pubsub.service';

@Injectable()
export class UserPublisherUseCase implements UserPublisherUseCaseInterface {
  constructor(
    @Inject(InjectionToken.USER_REPOSITORY)
    private readonly userRepository: UserRepositoryInterface,
    private readonly pubSubService: PubSubService,
  ) {}

  async publishUpdatedGameAttenders() {
    const gameAttenders = await this.userRepository.findMany({
      where: {
        participateGame: { not: Game.NONE },
      },
    });

    const updatedGameAttenders = {
      xeno: gameAttenders.filter((user) => user.participateGame === Game.XENO),
      coin_dropping: gameAttenders.filter((user) => user.participateGame === Game.COIN_DROPPING),
      ice_raze: gameAttenders.filter((user) => user.participateGame === Game.ICE_RAZE),
      president: gameAttenders.filter((user) => user.participateGame === Game.PRESIDENT),
      poker: gameAttenders.filter((user) => user.participateGame === Game.POKER),
      we_didnt_playtest: gameAttenders.filter((user) => user.participateGame === Game.WE_DIDNT_PLAYTEST),
    };

    await this.pubSubService.publish(PubSubTrigger.UPDATED_GAME_ATTENDERS, { updatedGameAttenders });

    return new GameAttenders(updatedGameAttenders);
  }
}
