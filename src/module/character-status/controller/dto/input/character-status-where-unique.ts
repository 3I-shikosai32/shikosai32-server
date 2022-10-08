import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CharacterStatusWhereUniqueInput {
  @Field(() => String, { nullable: false })
  id: string;
}
