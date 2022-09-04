import { Query, Resolver } from '@nestjs/graphql';
import GiftHistoryService from './gift_history.service';

@Resolver()
export default class GiftHistoryQuery {
  constructor(private service: GiftHistoryService) {}

  @Query(() => String)
  async tmp() {
    return 'tmp';
  }
}
