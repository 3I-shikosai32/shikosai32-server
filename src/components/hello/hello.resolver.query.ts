import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export default class HelloQuery {
  @Query(() => String)
  async Hello(): Promise<string> {
    return 'Hello, Shikosai32 World!';
  }
}
