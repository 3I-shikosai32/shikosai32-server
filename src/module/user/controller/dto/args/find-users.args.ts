import { ArgsType, Field, Int } from '@nestjs/graphql';
import { UserOrderInput } from '../input/user-order.input';
import { UserWhereUniqueInput } from '../input/user-where-unique.input';
import { UserWhereInput } from '../input/user-where.input';

@ArgsType()
export class FindUsersArgs {
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
