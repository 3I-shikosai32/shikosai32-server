import { InputType, Field } from '@nestjs/graphql';
import UserWhereInput from './where';

@InputType()
export default class UserListRelationFilter {
  @Field(() => UserWhereInput, { nullable: true })
  every?: UserWhereInput;

  @Field(() => UserWhereInput, { nullable: true })
  some?: UserWhereInput;

  @Field(() => UserWhereInput, { nullable: true })
  none?: UserWhereInput;
}
