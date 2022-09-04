import { ObjectType, Field, Int } from '@nestjs/graphql';
import NestedGiftHistory from '@/components/gift_history/dto/object/nested';

@ObjectType()
export default class Gift {
  @Field(() => String, { nullable: false })
  id: string;

  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: false })
  iconUrl: string;

  @Field(() => Int, { nullable: false })
  price: number;

  @Field(() => Int, { nullable: false })
  remaining: number;

  @Field(() => [NestedGiftHistory], { nullable: false })
  giftHistories: NestedGiftHistory[];

  @Field(() => Date, { nullable: false })
  createdAt: Date;
}
