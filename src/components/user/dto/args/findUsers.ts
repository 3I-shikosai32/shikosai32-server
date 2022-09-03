import { ArgsType, Field, Int } from '@nestjs/graphql';
import UserOrderInput from '../input/order';
import UserWhereInput from '../input/where';
import UserWhereUniqueInput from '../input/whereUnique';

@ArgsType()
export default class FindUsersArgs {
  @Field(() => UserWhereInput, { nullable: true })
  where?: UserWhereInput;

  @Field(() => [UserOrderInput], { nullable: true })
  orderBy?: UserOrderInput[];

  @Field(() => UserWhereUniqueInput, { nullable: true })
  cursor?: UserWhereUniqueInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;
}
