import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Character } from '@/infra/prisma/generated/prisma/character/enum';
import { Game } from '@/infra/prisma/generated/prisma/game/enum';
import { Role } from '@/infra/prisma/generated/prisma/role/enum';
import { GiftHistory } from '~/gift-history/controller/dto/object/gift-history.object';
import { Item } from '~/item/controller/dto/object/item.object';

@ObjectType()
export class User {
  @Field(() => String, { nullable: false })
  id: string;

  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: false })
  email: string;

  @Field(() => Role, { nullable: false })
  role: keyof typeof Role;

  @Field(() => Int, { nullable: false })
  totalPointDay1: number;

  @Field(() => Int, { nullable: false })
  totalPointDay2: number;

  @Field(() => Int, { nullable: false })
  consumablePoint: number;

  @Field(() => Character, { nullable: false })
  character: keyof typeof Character;

  @Field(() => String, { nullable: false })
  iconUrl: string;

  @Field(() => String, { nullable: false })
  avatarUrl: string;

  @Field(() => [Item], { nullable: false })
  items: Item[];

  @Field(() => [String], { nullable: false })
  itemIds: string[];

  @Field(() => Game, { nullable: false })
  participateGame: keyof typeof Game;

  @Field(() => Int, { nullable: false })
  pullableGachaTimes: number;

  @Field(() => [GiftHistory], { nullable: false })
  giftHistories: GiftHistory[];

  @Field(() => Date, { nullable: false })
  createdAt: Date;
}
