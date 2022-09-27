import { ObjectType, Field } from '@nestjs/graphql';
import { Item } from '~/item/controller/dto/object/item.object';

@ObjectType()
export class ObtainmentStatus {
  @Field(() => Item, { nullable: false })
  item: Item;

  @Field(() => Boolean, { nullable: false })
  obtained: boolean;
}
