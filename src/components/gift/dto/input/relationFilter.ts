import { InputType, Field } from '@nestjs/graphql';
import GiftWhereInput from './where';

@InputType()
export default class GiftRelationFilter {
  @Field(() => GiftWhereInput, { nullable: true })
  is?: GiftWhereInput;

  @Field(() => GiftWhereInput, { nullable: true })
  isNot?: GiftWhereInput;
}
