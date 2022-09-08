import { InputType, Field } from '@nestjs/graphql';
import ItemWhereInput from './where';

@InputType()
export default class ItemListRelationFilter {
  @Field(() => ItemWhereInput, { nullable: true })
  every?: ItemWhereInput;

  @Field(() => ItemWhereInput, { nullable: true })
  some?: ItemWhereInput;

  @Field(() => ItemWhereInput, { nullable: true })
  none?: ItemWhereInput;
}
