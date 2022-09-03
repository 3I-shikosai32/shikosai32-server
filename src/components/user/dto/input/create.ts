import { InputType, Field, Int } from '@nestjs/graphql';
import { CaharacterItem } from '@/libs/prisma/generated/caharacter-item/caharacter-item/model';
import { GiftHistory } from '@/libs/prisma/generated/gift-history/gift-history/model';
import { Character } from '@/libs/prisma/generated/prisma/character/enum';
import { Game } from '@/libs/prisma/generated/prisma/game/enum';
import { Role } from '@/libs/prisma/generated/prisma/role/enum';

@InputType()
export default class UserCreateInput {
  @Field(() => String, { nullable: false })
  id: string;

  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: false })
  email: string;

  @Field(() => Role, { nullable: true, defaultValue: Role.USER })
  role: Role;

  @Field(() => Int, { nullable: true, defaultValue: 0 })
  totalPointDay1: number;

  @Field(() => Int, { nullable: true, defaultValue: 0 })
  totalPointDay2: number;

  @Field(() => Int, { nullable: true, defaultValue: 0 })
  consumablePoint: number;

  @Field(() => Character, { nullable: false })
  character: Character;

  @Field(() => String, { nullable: false })
  iconUrl: string;

  @Field(() => String, { nullable: false })
  avatarUrl: string;

  @Field(() => [CaharacterItem], { nullable: true, defaultValue: [] })
  characterItems: CaharacterItem[];

  @Field(() => Game, { nullable: true, defaultValue: Game.NONE })
  participateGame: Game;

  @Field(() => Int, { nullable: true, defaultValue: 0 })
  pullableGachaTimes: number;

  @Field(() => [GiftHistory], { nullable: true, defaultValue: [] })
  giftHistories: GiftHistory[];
}
