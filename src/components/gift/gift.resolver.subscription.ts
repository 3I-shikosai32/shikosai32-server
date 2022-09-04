import { Resolver } from '@nestjs/graphql';
import PubSubService from '@/libs/pubsub/pubsub.service';

@Resolver()
export default class UserSubscription {
  constructor(private pubSubService: PubSubService) {}
}
