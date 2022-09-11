import { Args, Query, Resolver } from '@nestjs/graphql';
import FindGiftHistoriesArgs from './dto/args/finGiftHistories';
import FindGiftHistoryArgs from './dto/args/findGiftHistory';
import GiftHistory from './dto/object';
import GiftHistoryService from './gift_history.service';

@Resolver()
export default class GiftHistoryQuery {
  constructor(private service: GiftHistoryService) {}

  @Query(() => GiftHistory, { nullable: true })
  async findGiftHistory(@Args() args: FindGiftHistoryArgs): Promise<GiftHistory | null> {
    const giftHistory = await this.service.findUnique(args);

    return giftHistory;
  }

  @Query(() => [GiftHistory], { nullable: true })
  async findGiftHistories(@Args() args: FindGiftHistoriesArgs): Promise<GiftHistory[]> {
    const giftHistory = await this.service.findMany(args);

    return giftHistory;
  }
}
