import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../../prisma/role/enum';
import { Int } from '@nestjs/graphql';
import { Game } from '../../prisma/game/enum';
import { CharacterStatusUncheckedCreateNestedManyWithoutUserInput } from '../../character-status/character-status-unchecked-create-nested-many-without-user/input';
import { GiftHistoryUncheckedCreateNestedManyWithoutUserInput } from '../../gift-history/gift-history-unchecked-create-nested-many-without-user/input';

@InputType()
export class UserUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;

    @Field(() => String, {nullable:false})
    authId!: string;

    @Field(() => Int, {nullable:true})
    totalPointDay1?: number;

    @Field(() => Int, {nullable:true})
    totalPointDay2?: number;

    @Field(() => Int, {nullable:true})
    consumablePoint?: number;

    @Field(() => Game, {nullable:true})
    participateGame?: keyof typeof Game;

    @Field(() => Int, {nullable:true})
    pullableGachaTimes?: number;

    @Field(() => CharacterStatusUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    characterStatuses?: CharacterStatusUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => GiftHistoryUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    giftHistories?: GiftHistoryUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
