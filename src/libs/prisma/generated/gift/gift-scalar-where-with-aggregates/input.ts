import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../../prisma/string-with-aggregates-filter/input';
import { EnumGiftNameWithAggregatesFilter } from '../../prisma/enum-gift-name-with-aggregates-filter/input';
import { IntWithAggregatesFilter } from '../../prisma/int-with-aggregates-filter/input';
import { DateTimeWithAggregatesFilter } from '../../prisma/date-time-with-aggregates-filter/input';

@InputType()
export class GiftScalarWhereWithAggregatesInput {

    @Field(() => [GiftScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<GiftScalarWhereWithAggregatesInput>;

    @Field(() => [GiftScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<GiftScalarWhereWithAggregatesInput>;

    @Field(() => [GiftScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<GiftScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => EnumGiftNameWithAggregatesFilter, {nullable:true})
    name?: EnumGiftNameWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    iconUrl?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    price?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    remaining?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
