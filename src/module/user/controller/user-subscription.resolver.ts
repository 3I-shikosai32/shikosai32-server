import { Resolver } from '@nestjs/graphql';
import { PubSubService } from '@/infra/pubsub/pubsub.service';

@Resolver()
export class UserSubscription {
  constructor(private readonly pubSubService: PubSubService) {}
}
