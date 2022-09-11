import { Args, Query, Resolver } from '@nestjs/graphql';
import FindGiftsArgs from './dto/args/findGifts';
import Gift from './dto/object';
import GiftService from './gift.service';

@Resolver()
export default class GiftQuery {
  constructor(private service: GiftService) {}

  @Query(() => [Gift])
  async findGifts(@Args() args: FindGiftsArgs): Promise<Gift[]> {
    const gifts = await this.service.findMany(args);

    return gifts;
  }
}
