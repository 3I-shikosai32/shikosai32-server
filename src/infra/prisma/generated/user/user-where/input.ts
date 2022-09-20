import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../../prisma/string-filter/input';
import { EnumRoleFilter } from '../../prisma/enum-role-filter/input';
import { IntFilter } from '../../prisma/int-filter/input';
import { EnumCharacterFilter } from '../../prisma/enum-character-filter/input';
import { ItemListRelationFilter } from '../../item/item-list-relation-filter/input';
import { StringNullableListFilter } from '../../prisma/string-nullable-list-filter/input';
import { EnumGameFilter } from '../../prisma/enum-game-filter/input';
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

    @Field(() => EnumCharacterFilter, {nullable:true})
    character?: EnumCharacterFilter;

    @Field(() => StringFilter, {nullable:true})
    iconUrl?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    avatarUrl?: StringFilter;

    @Field(() => ItemListRelationFilter, {nullable:true})
    items?: ItemListRelationFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    itemIds?: StringNullableListFilter;

    @Field(() => EnumGameFilter, {nullable:true})
    participateGame?: EnumGameFilter;

    @Field(() => IntFilter, {nullable:true})
    pullableGachaTimes?: IntFilter;

    @Field(() => GiftHistoryListRelationFilter, {nullable:true})
    giftHistories?: GiftHistoryListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
