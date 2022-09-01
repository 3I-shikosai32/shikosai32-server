import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../../prisma/string-filter/input';
import { EnumGiftNameFilter } from '../../prisma/enum-gift-name-filter/input';
import { IntFilter } from '../../prisma/int-filter/input';
import { GiftHistoryListRelationFilter } from '../../gift-history/gift-history-list-relation-filter/input';
import { DateTimeFilter } from '../../prisma/date-time-filter/input';

@InputType()
export class GiftWhereInput {

    @Field(() => [GiftWhereInput], {nullable:true})
    AND?: Array<GiftWhereInput>;

    @Field(() => [GiftWhereInput], {nullable:true})
    OR?: Array<GiftWhereInput>;

    @Field(() => [GiftWhereInput], {nullable:true})
    NOT?: Array<GiftWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumGiftNameFilter, {nullable:true})
    name?: EnumGiftNameFilter;

    @Field(() => StringFilter, {nullable:true})
    iconUrl?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    price?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    remaining?: IntFilter;

    @Field(() => GiftHistoryListRelationFilter, {nullable:true})
    giftHistories?: GiftHistoryListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
