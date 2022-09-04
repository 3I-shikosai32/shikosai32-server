import { Resolver } from '@nestjs/graphql';
import PubSubService from '@/libs/pubsub/pubsub.service';

@Resolver()
export default class ItemSubscription {
  constructor(private pubSubService: PubSubService) {}
}