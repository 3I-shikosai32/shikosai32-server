import { Args, Query, Resolver } from '@nestjs/graphql';
import FindGiftHistoriesArgs from './dto/args/finGiftHistories';
import GiftHistory from './dto/object';
import GiftHistoryService from './gift_history.service';

@Resolver()
export default class GiftHistoryQuery {
  constructor(private service: GiftHistoryService) {}

  @Query(() => [GiftHistory], { nullable: true })
  async findGiftHistories(@Args() args: FindGiftHistoriesArgs): Promise<GiftHistory[]> {
    const giftHistory = await this.service.findMany(args);

    return giftHistory;
  }
}
