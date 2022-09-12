import { ObjectType, Field } from '@nestjs/graphql';
import User from '.';

@ObjectType()
export default class GameAttenders {
  @Field(() => [User], { nullable: false })
  xeno: User[];

  @Field(() => [User], { nullable: false })
  coin_dropping: User[];

  @Field(() => [User], { nullable: false })
  ice_raze: User[];

  @Field(() => [User], { nullable: false })
  president: User[];

  @Field(() => [User], { nullable: false })
  poker: User[];

  @Field(() => [User], { nullable: false })
  we_didnt_playtest: User[];
}
