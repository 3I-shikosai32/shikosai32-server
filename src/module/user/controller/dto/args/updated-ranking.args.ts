import { ArgsType, Field } from '@nestjs/graphql';
import { RankingTarget } from '../enum/ranking-target.enum';

@ArgsType()
export class UpdatedRankingArgs {
  @Field(() => RankingTarget, { nullable: false })
  rankingTarget: keyof typeof RankingTarget;
}
