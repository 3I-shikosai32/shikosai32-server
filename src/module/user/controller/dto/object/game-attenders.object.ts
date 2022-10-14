import { Field, ObjectType } from '@nestjs/graphql';
import { User } from './user.object';

@ObjectType()
export class GameAttenders {
  @Field(() => [User], { nullable: false })
  xeno: User[];

  @Field(() => [User], { nullable: false })
  coinDropping: User[];

  @Field(() => [User], { nullable: false })
  iceRaze: User[];

  @Field(() => [User], { nullable: false })
  president: User[];

  @Field(() => [User], { nullable: false })
  poker: User[];

  @Field(() => [User], { nullable: false })
  weDidntPlaytest: User[];
}
