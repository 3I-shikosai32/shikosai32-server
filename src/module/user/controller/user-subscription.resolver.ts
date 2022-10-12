import { Args, Resolver, Subscription } from '@nestjs/graphql';
import { UpdatedRankingArgs } from './dto/args/updated-ranking.args';
import { GameAttenders } from './dto/object/game-attenders.object';
import { User } from './dto/object/user.object';
import { generateUpdatedRankingTrigger, PubSubTrigger } from '@/common/constant/pubsub-iterator.constant';
import { PubSubService } from '@/infra/pubsub/pubsub.service';

@Resolver()
export class UserSubscription {
  constructor(private readonly pubSubService: PubSubService) {}

  @Subscription(() => [User])
  async updatedRanking(@Args() args: UpdatedRankingArgs) {
    return this.pubSubService.asyncIterator(generateUpdatedRankingTrigger(args.rankingTarget));
  }

  @Subscription(() => GameAttenders)
  async updatedGameAttenders() {
    return this.pubSubService.asyncIterator(PubSubTrigger.UPDATED_GAME_ATTENDERS);
  }
}
