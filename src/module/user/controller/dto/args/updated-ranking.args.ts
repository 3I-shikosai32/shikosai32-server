import { ArgsType, Field } from '@nestjs/graphql';
import { RankingPeriod } from '../enum/date.enum';
import { RankingTarget } from '../enum/ranking-target.enum';

@ArgsType()
export class UpdatedRankingArgs {
  @Field(() => RankingTarget, { nullable: false })
  rankingTarget: keyof typeof RankingTarget;

  @Field(() => RankingPeriod, { nullable: false })
  date: keyof typeof RankingPeriod;
}
