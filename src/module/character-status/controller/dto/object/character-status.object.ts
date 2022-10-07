import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ItemCompletedHistory } from './item-completed-history.object';
import { Character } from '@/infra/prisma/generated/prisma/character/enum';
import { Item } from '~/item/controller/dto/object/item.object';
import { User } from '~/user/controller/dto/object/user.object';

@ObjectType()
export class CharacterStatus {
  @Field(() => String, { nullable: false })
  id: string;

  @Field(() => Character, { nullable: false })
  character: keyof typeof Character;

  @Field(() => String, { nullable: false })
  iconUrl: string;

  @Field(() => String, { nullable: false })
  avatarUrl: string;

  @Field(() => Int, { nullable: false })
  characterPointDay1: number;

  @Field(() => Int, { nullable: false })
  characterPointDay2: number;

  @Field(() => User, { nullable: false })
  user: User;

  @Field(() => String, { nullable: false })
  userId: string;

  @Field(() => [Item], { nullable: false })
  items: Item[];

  @Field(() => [String], { nullable: false })
  itemIds: string[];

  @Field(() => ItemCompletedHistory, { nullable: true })
  itemCompletedHistory: ItemCompletedHistory | null;
}
