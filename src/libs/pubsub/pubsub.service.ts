import { Injectable } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';

@Injectable()
export default class PubSubService extends PubSub {
  constructor() {
    super();
  }
}
