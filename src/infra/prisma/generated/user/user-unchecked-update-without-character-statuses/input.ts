import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../../prisma/role/enum';
import { Int } from '@nestjs/graphql';
import { Game } from '../../prisma/game/enum';
import { GiftHistoryUncheckedUpdateManyWithoutUserNestedInput } from '../../gift-history/gift-history-unchecked-update-many-without-user-nested/input';

@InputType()
export class UserUncheckedUpdateWithoutCharacterStatusesInput {

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

    @Field(() => GiftHistoryUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    giftHistories?: GiftHistoryUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
