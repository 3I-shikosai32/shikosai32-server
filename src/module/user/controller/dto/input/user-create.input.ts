import { Field, InputType, Int } from '@nestjs/graphql';
import { Character } from '@/infra/prisma/generated/prisma/character/enum';
import { Game } from '@/infra/prisma/generated/prisma/game/enum';
import { Role } from '@/infra/prisma/generated/prisma/role/enum';
import { GiftHistoryCreateInput } from '~/gift-history/controller/dto/input/gift-history-create.input';

@InputType()
export class UserCreateInput {
  @Field(() => String, { nullable: false })
  id: string;

  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: false })
  email: string;

  @Field(() => Role, { nullable: true, defaultValue: Role.USER })
  role: keyof typeof Role;

  @Field(() => Int, { nullable: true, defaultValue: 0 })
  totalPointDay1: number;

  @Field(() => Int, { nullable: true, defaultValue: 0 })
  totalPointDay2: number;

  @Field(() => Int, { nullable: true, defaultValue: 0 })
  consumablePoint: number;

  @Field(() => Character, { nullable: false })
  character: keyof typeof Character;

  @Field(() => String, { nullable: false })
  iconUrl: string;

  @Field(() => String, { nullable: false })
  avatarUrl: string;

  @Field(() => Game, { nullable: true, defaultValue: Game.NONE })
  participateGame: keyof typeof Game;

  @Field(() => Int, { nullable: true, defaultValue: 0 })
  pullableGachaTimes: number;

  @Field(() => [GiftHistoryCreateInput], { nullable: true })
  giftHistories?: GiftHistoryCreateInput[];
}
