import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../../prisma/string-filter/input';
import { EnumRoleFilter } from '../../prisma/enum-role-filter/input';
import { IntFilter } from '../../prisma/int-filter/input';
import { EnumGameFilter } from '../../prisma/enum-game-filter/input';
import { CharacterStatusListRelationFilter } from '../../character-status/character-status-list-relation-filter/input';
import { GiftHistoryListRelationFilter } from '../../gift-history/gift-history-list-relation-filter/input';
import { DateTimeFilter } from '../../prisma/date-time-filter/input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => EnumRoleFilter, {nullable:true})
    role?: EnumRoleFilter;

    @Field(() => IntFilter, {nullable:true})
    totalPointDay1?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    totalPointDay2?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    consumablePoint?: IntFilter;

    @Field(() => EnumGameFilter, {nullable:true})
    participateGame?: EnumGameFilter;

    @Field(() => IntFilter, {nullable:true})
    pullableGachaTimes?: IntFilter;

    @Field(() => CharacterStatusListRelationFilter, {nullable:true})
    CharacterStatuses?: CharacterStatusListRelationFilter;

    @Field(() => GiftHistoryListRelationFilter, {nullable:true})
    giftHistories?: GiftHistoryListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
