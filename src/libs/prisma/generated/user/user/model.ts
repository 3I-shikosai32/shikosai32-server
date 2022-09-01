import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Role } from '../../prisma/role/enum';
import { Int } from '@nestjs/graphql';
import { Character } from '../../prisma/character/enum';
import { CaharacterItem } from '../../caharacter-item/caharacter-item/model';
import { Game } from '../../prisma/game/enum';
import { GiftHistory } from '../../gift-history/gift-history/model';
import { UserCount } from '../user-count/output';

@ObjectType()
export class User {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => Role, {nullable:false})
    role!: keyof typeof Role;

    @Field(() => Int, {nullable:false,defaultValue:0})
    totalPointDay1!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    totalPointDay2!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    consumablePoint!: number;

    @Field(() => Character, {nullable:false})
    character!: keyof typeof Character;

    @Field(() => String, {nullable:false})
    iconUrl!: string;

    @Field(() => String, {nullable:false})
    avatarUrl!: string;

    @Field(() => [CaharacterItem], {nullable:true})
    items?: Array<CaharacterItem>;

    @Field(() => Game, {nullable:false})
    participateGame!: keyof typeof Game;

    @Field(() => Int, {nullable:false,defaultValue:0})
    pullableGachaTimes!: number;

    @Field(() => [GiftHistory], {nullable:true})
    giftHistories?: Array<GiftHistory>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
