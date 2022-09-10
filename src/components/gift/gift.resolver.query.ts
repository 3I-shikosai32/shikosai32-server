import { Args, Query, Resolver } from '@nestjs/graphql';
import FindGiftArgs from './dto/args/findGift';
import Gift from './dto/object';
import GiftService from './gift.service';

@Resolver()
export default class GiftQuery {
  constructor(private service: GiftService) {}

  @Query(() => Gift, { nullable: true })
  async findGift(@Args() args: FindGiftArgs): Promise<Gift | null> {
    const gift = await this.service.findUnique(args);

    return gift;
  }
}
