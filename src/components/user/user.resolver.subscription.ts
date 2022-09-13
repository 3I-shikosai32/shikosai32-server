import { Resolver, Subscription } from '@nestjs/graphql';
import { Game } from '@prisma/client';
import GameAttenders from './dto/object/gameAttenders';
import UserService from './user.service';
import PubSubService from '@/libs/pubsub/pubsub.service';

@Resolver()
export default class UserSubscription {
  constructor(private pubSubService: PubSubService) {}

  @Subscription(() => GameAttenders)
  async updatedGameAttenders() {
    return this.pubSubService.asyncIterator('updatedGameAttenders');
  }
}

export const publishUpdatedGameAttenders = async (pubSubService: PubSubService, userService: UserService) => {
  const gameAttenders = await userService.findMany({
    where: {
      participateGame: { not: Game.NONE },
    },
  });

  const updatedGameAttenders: GameAttenders = {
    xeno: gameAttenders.filter((user) => user.participateGame === Game.XENO),
    coin_dropping: gameAttenders.filter((user) => user.participateGame === Game.COIN_DROPPING),
    ice_raze: gameAttenders.filter((user) => user.participateGame === Game.ICE_RAZE),
    president: gameAttenders.filter((user) => user.participateGame === Game.PRESIDENT),
    poker: gameAttenders.filter((user) => user.participateGame === Game.POKER),
    we_didnt_playtest: gameAttenders.filter((user) => user.participateGame === Game.WE_DIDNT_PLAYTEST),
  };

  await pubSubService.publish('updatedGameAttenders', { updatedGameAttenders });
};
