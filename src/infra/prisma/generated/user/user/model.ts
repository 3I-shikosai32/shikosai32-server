import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Role } from '../../prisma/role/enum';
import { Int } from '@nestjs/graphql';
import { Game } from '../../prisma/game/enum';
import { CharacterStatus } from '../../character-status/character-status/model';
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

    @Field(() => Role, {nullable:false,defaultValue:'USER'})
    role!: keyof typeof Role;

    @Field(() => Int, {nullable:false,defaultValue:0})
    totalPointDay1!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    totalPointDay2!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    consumablePoint!: number;

    @Field(() => Game, {nullable:false,defaultValue:'NONE'})
    participateGame!: keyof typeof Game;

    @Field(() => Int, {nullable:false,defaultValue:0})
    pullableGachaTimes!: number;

    @Field(() => [CharacterStatus], {nullable:true})
    CharacterStatuses?: Array<CharacterStatus>;

    @Field(() => [GiftHistory], {nullable:true})
    giftHistories?: Array<GiftHistory>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
