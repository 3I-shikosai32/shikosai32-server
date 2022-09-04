import { Query, Resolver } from '@nestjs/graphql';
import GiftService from './gift.service';

@Resolver()
export default class GiftQuery {
  constructor(private service: GiftService) {}

  @Query(() => String)
  async tmp() {
    return 'tmp';
  }
}
