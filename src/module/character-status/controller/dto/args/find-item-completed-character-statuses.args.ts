import { ArgsType, Field, Int } from '@nestjs/graphql';
import { CharacterStatusOrderInput } from '../input/character-status-order.input';
import { CharacterStatusWhereUniqueInput } from '../input/character-status-where-unique';
import { CharacterStatusWhereInput } from '../input/character-status-where.input';

@ArgsType()
export class FindItemCompletedCharacterStatusesArgs {
  @Field(() => CharacterStatusWhereInput, { nullable: true })
  where?: CharacterStatusWhereInput;

  @Field(() => [CharacterStatusOrderInput], { nullable: true })
  orderBy?: CharacterStatusOrderInput[];

  @Field(() => CharacterStatusWhereUniqueInput, { nullable: true })
  cursor?: CharacterStatusWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;
}
