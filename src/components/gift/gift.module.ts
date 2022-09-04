import { Module } from '@nestjs/common';
import GiftMutation from './gift.resolver.mutation';
import GiftQuery from './gift.resolver.query';
import GiftSubscription from './gift.resolver.subscription';
import GiftService from './gift.service';

@Module({
  providers: [GiftService, GiftQuery, GiftMutation, GiftSubscription],
})
export default class GiftModule {}
