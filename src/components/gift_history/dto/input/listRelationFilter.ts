import { InputType, Field } from '@nestjs/graphql';
import GiftHistoryWhereInput from './where';

@InputType()
export default class GiftHistoryListRelationFilter {
  @Field(() => GiftHistoryWhereInput, { nullable: true })
  every?: GiftHistoryWhereInput;

  @Field(() => GiftHistoryWhereInput, { nullable: true })
  some?: GiftHistoryWhereInput;

  @Field(() => GiftHistoryWhereInput, { nullable: true })
  none?: GiftHistoryWhereInput;
}
