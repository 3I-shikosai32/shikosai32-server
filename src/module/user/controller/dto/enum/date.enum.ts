import { registerEnumType } from '@nestjs/graphql';

// eslint-disable-next-line no-shadow
export enum RankingPeriod {
  DAY1 = 'DAY1',
  DAY2 = 'DAY2',
}

registerEnumType(RankingPeriod, { name: 'RankingPeriod', description: undefined });
