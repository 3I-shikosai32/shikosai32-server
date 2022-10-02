import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../../prisma/role/enum';
import { Int } from '@nestjs/graphql';
import { Game } from '../../prisma/game/enum';
import { CharacterStatusUncheckedUpdateManyWithoutUserNestedInput } from '../../character-status/character-status-unchecked-update-many-without-user-nested/input';

@InputType()
export class UserUncheckedUpdateWithoutGiftHistoriesInput {

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

    @Field(() => Game, {nullable:true})
    participateGame?: keyof typeof Game;

    @Field(() => Int, {nullable:true})
    pullableGachaTimes?: number;

    @Field(() => CharacterStatusUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    CharacterStatuses?: CharacterStatusUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
