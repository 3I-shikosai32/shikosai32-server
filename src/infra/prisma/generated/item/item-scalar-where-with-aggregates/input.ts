import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../../prisma/string-with-aggregates-filter/input';
import { EnumCharacterWithAggregatesFilter } from '../../prisma/enum-character-with-aggregates-filter/input';
import { IntWithAggregatesFilter } from '../../prisma/int-with-aggregates-filter/input';
import { StringNullableListFilter } from '../../prisma/string-nullable-list-filter/input';

@InputType()
export class ItemScalarWhereWithAggregatesInput {

    @Field(() => [ItemScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ItemScalarWhereWithAggregatesInput>;

    @Field(() => [ItemScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ItemScalarWhereWithAggregatesInput>;

    @Field(() => [ItemScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ItemScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    url?: StringWithAggregatesFilter;

    @Field(() => EnumCharacterWithAggregatesFilter, {nullable:true})
    character?: EnumCharacterWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    layer?: IntWithAggregatesFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    characterStatusIds?: StringNullableListFilter;
}
