import { Resolver, Subscription } from '@nestjs/graphql';
import { GameAttenders } from '../domain/model/game-attenders.model';
import { PubSubTrigger } from '@/common/constant/pubsub-iterator.constant';
import { PubSubService } from '@/infra/pubsub/pubsub.service';

@Resolver()
export class UserSubscription {
  constructor(private readonly pubSubService: PubSubService) {}

  @Subscription(() => GameAttenders)
  async updatedGameAttenders() {
    return this.pubSubService.asyncIterator(PubSubTrigger.UPDATED_GAME_ATTENDERS);
  }
}
