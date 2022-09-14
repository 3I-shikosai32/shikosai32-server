import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Role } from '../../prisma/role/enum';
import { Int } from '@nestjs/graphql';
import { Character } from '../../prisma/character/enum';
import { Game } from '../../prisma/game/enum';

@ObjectType()
export class UserMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;

    @Field(() => Int, {nullable:true})
    totalPointDay1?: number;

    @Field(() => Int, {nullable:true})
    totalPointDay2?: number;

    @Field(() => Int, {nullable:true})
    consumablePoint?: number;

    @Field(() => Character, {nullable:true})
    character?: keyof typeof Character;

    @Field(() => String, {nullable:true})
    iconUrl?: string;

    @Field(() => String, {nullable:true})
    avatarUrl?: string;

    @Field(() => Game, {nullable:true})
    participateGame?: keyof typeof Game;

    @Field(() => Int, {nullable:true})
    pullableGachaTimes?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
