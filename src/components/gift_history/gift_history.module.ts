import { Module } from '@nestjs/common';
import GiftHistoryMutation from './gift_history.resolver.mutation';
import GiftHistoryQuery from './gift_history.resolver.query';
import GiftHistorySubscription from './gift_history.resolver.subscription';
import GiftHistoryService from './gift_history.service';

@Module({
  providers: [GiftHistoryService, GiftHistoryQuery, GiftHistoryMutation, GiftHistorySubscription],
})
export default class GiftHistoryModule {}
