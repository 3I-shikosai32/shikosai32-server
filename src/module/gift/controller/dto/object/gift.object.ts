import { Field, Int, ObjectType } from '@nestjs/graphql';
import { NestedGiftHistory } from '~/gift-history/controller/dto/object/nested-gift-history.object';

@ObjectType()
export class Gift {
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
