import { Resolver } from '@nestjs/graphql';
import PubSubService from '@/libs/pubsub/pubsub.service';

@Resolver()
export default class GiftHistorySubscription {
  constructor(private pubSubService: PubSubService) {}
}
