import { Module } from '@nestjs/common';
import GiftQuery from './gift.resolver.query';
import GiftService from './gift.service';

@Module({
  providers: [GiftService, GiftQuery],
})
export default class GiftModule {}
