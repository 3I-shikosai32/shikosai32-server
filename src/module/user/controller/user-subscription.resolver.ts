import { Resolver, Subscription } from '@nestjs/graphql';
import { GameAttenders } from '../domain/model/game-attenders.model';
import { PubSubService } from '@/infra/pubsub/pubsub.service';

@Resolver()
export class UserSubscription {
  constructor(private readonly pubSubService: PubSubService) {}

  @Subscription(() => GameAttenders)
  async updatedGameAttenders() {
    return this.pubSubService.asyncIterator('updatedGameAttenders');
  }
}
