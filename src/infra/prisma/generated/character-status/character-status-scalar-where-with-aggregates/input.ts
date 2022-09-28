import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../../prisma/string-with-aggregates-filter/input';
import { EnumCharacterWithAggregatesFilter } from '../../prisma/enum-character-with-aggregates-filter/input';
import { IntWithAggregatesFilter } from '../../prisma/int-with-aggregates-filter/input';
import { StringNullableListFilter } from '../../prisma/string-nullable-list-filter/input';

@InputType()
export class CharacterStatusScalarWhereWithAggregatesInput {

    @Field(() => [CharacterStatusScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CharacterStatusScalarWhereWithAggregatesInput>;

    @Field(() => [CharacterStatusScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CharacterStatusScalarWhereWithAggregatesInput>;

    @Field(() => [CharacterStatusScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CharacterStatusScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => EnumCharacterWithAggregatesFilter, {nullable:true})
    character?: EnumCharacterWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    iconUrl?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    avatarUrl?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    characterPointDay1?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    characterPointDay2?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    itemIds?: StringNullableListFilter;
}
