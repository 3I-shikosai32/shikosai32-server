import { ObjectType, Field } from '@nestjs/graphql';
import Item from '@/components/item/dto/object';

@ObjectType()
export default class ObtainmentStatus {
  @Field(() => Item, { nullable: false })
  item: Item;

  @Field(() => Boolean, { nullable: false })
  obtained: boolean;
}
