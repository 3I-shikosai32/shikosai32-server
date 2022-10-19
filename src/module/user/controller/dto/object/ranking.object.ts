import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from './user.object';

@ObjectType()
export class Ranking {
  @Field(() => User, { nullable: false })
  user: User;

  @Field(() => Int, { nullable: false })
  point: number;
}
