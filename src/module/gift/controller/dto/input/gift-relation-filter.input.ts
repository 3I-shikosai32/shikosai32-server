import { Field, InputType } from '@nestjs/graphql';
import { GiftWhereInput } from './gift-where.input';

@InputType()
export class GiftRelationFilter {
  @Field(() => GiftWhereInput, { nullable: true })
  is?: GiftWhereInput;

  @Field(() => GiftWhereInput, { nullable: true })
  isNot?: GiftWhereInput;
}
