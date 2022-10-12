import { registerEnumType } from '@nestjs/graphql';

// eslint-disable-next-line no-shadow
export enum RankingTarget {
  TOTAL = 'TOTAL',
  TREE = 'TREE',
  FOX = 'FOX',
  GOKU = 'GOKU',
  CAT = 'CAT',
  PUDDING = 'PUDDING',
  REAPER = 'REAPER',
}

registerEnumType(RankingTarget, { name: 'RankingTarget', description: undefined });
