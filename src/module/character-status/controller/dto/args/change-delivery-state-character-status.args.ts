import { ArgsType, Field } from '@nestjs/graphql';
import { CharacterStatusWhereUniqueInput } from '../input/character-status-where-unique';

@ArgsType()
export class ChangeDeliveryStateCharacterStatusArgs {
  @Field(() => CharacterStatusWhereUniqueInput, { nullable: false })
  where: CharacterStatusWhereUniqueInput;

  @Field(() => Boolean, { nullable: false })
  delivered: boolean;
}
