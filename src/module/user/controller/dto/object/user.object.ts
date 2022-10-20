import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Game } from '@/infra/prisma/generated/prisma/game/enum';
import { Role } from '@/infra/prisma/generated/prisma/role/enum';
import { CharacterStatus } from '~/character-status/controller/dto/object/character-status.object';
import { GiftHistory } from '~/gift-history/controller/dto/object/gift-history.object';

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

  @Field(() => String, { nullable: false })
  authId: string;

  @Field(() => Int, { nullable: false })
  totalPointDay1: number;

  @Field(() => Int, { nullable: false })
  totalPointDay2: number;

  @Field(() => Int, { nullable: false })
  consumablePoint: number;

  @Field(() => Game, { nullable: false })
  participateGame: keyof typeof Game;

  @Field(() => Int, { nullable: false })
  pullableGachaTimes: number;

  @Field(() => CharacterStatus, { nullable: false })
  characterStatus: CharacterStatus;

  @Field(() => [GiftHistory], { nullable: false })
  giftHistories: GiftHistory[];

  @Field(() => Date, { nullable: false })
  createdAt: Date;
}
