import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../../prisma/role/enum';
import { Int } from '@nestjs/graphql';
import { Character } from '../../prisma/character/enum';
import { CaharacterItemCreateInput } from '../../caharacter-item/caharacter-item-create/input';
import { Game } from '../../prisma/game/enum';

@InputType()
export class UserCreateWithoutGiftHistoriesInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;

    @Field(() => Int, {nullable:true})
    totalPointDay1?: number;

    @Field(() => Int, {nullable:true})
    totalPointDay2?: number;

    @Field(() => Int, {nullable:true})
    consumablePoint?: number;

    @Field(() => Character, {nullable:false})
    character!: keyof typeof Character;

    @Field(() => String, {nullable:false})
    iconUrl!: string;

    @Field(() => String, {nullable:false})
    avatarUrl!: string;

    @Field(() => [CaharacterItemCreateInput], {nullable:true})
    items?: Array<CaharacterItemCreateInput>;

    @Field(() => Game, {nullable:true})
    participateGame?: keyof typeof Game;

    @Field(() => Int, {nullable:true})
    pullableGachaTimes?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
