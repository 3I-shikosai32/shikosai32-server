import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../../prisma/role/enum';
import { Int } from '@nestjs/graphql';
import { Character } from '../../prisma/character/enum';
import { Game } from '../../prisma/game/enum';
import { GiftHistoryUncheckedCreateNestedManyWithoutUserInput } from '../../gift-history/gift-history-unchecked-create-nested-many-without-user/input';

@InputType()
export class UserUncheckedCreateWithoutItemsInput {

    @Field(() => String, {nullable:true})
    id?: string;

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

    @Field(() => [String], {nullable:true})
    itemIds?: Array<string>;

    @Field(() => Game, {nullable:true})
    participateGame?: keyof typeof Game;

    @Field(() => Int, {nullable:true})
    pullableGachaTimes?: number;

    @Field(() => GiftHistoryUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    giftHistories?: GiftHistoryUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
