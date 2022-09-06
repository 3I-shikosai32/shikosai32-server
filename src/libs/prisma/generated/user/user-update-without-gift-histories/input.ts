import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../../prisma/role/enum';
import { Int } from '@nestjs/graphql';
import { Character } from '../../prisma/character/enum';
import { ItemUpdateManyWithoutUsersNestedInput } from '../../item/item-update-many-without-users-nested/input';
import { Game } from '../../prisma/game/enum';

@InputType()
export class UserUpdateWithoutGiftHistoriesInput {

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

    @Field(() => ItemUpdateManyWithoutUsersNestedInput, {nullable:true})
    items?: ItemUpdateManyWithoutUsersNestedInput;

    @Field(() => [String], {nullable:true})
    itemIds?: Array<string>;

    @Field(() => Game, {nullable:true})
    participateGame?: keyof typeof Game;

    @Field(() => Int, {nullable:true})
    pullableGachaTimes?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
