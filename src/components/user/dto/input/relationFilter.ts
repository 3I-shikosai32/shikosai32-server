import { InputType, Field } from '@nestjs/graphql';
import UserWhereInput from './where';

@InputType()
export default class UserRelationFilter {
  @Field(() => UserWhereInput, { nullable: true })
  is?: UserWhereInput;

  @Field(() => UserWhereInput, { nullable: true })
  isNot?: UserWhereInput;
}
