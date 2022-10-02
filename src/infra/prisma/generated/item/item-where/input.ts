import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../../prisma/string-filter/input';
import { EnumCharacterFilter } from '../../prisma/enum-character-filter/input';
import { IntFilter } from '../../prisma/int-filter/input';
import { CharacterStatusListRelationFilter } from '../../character-status/character-status-list-relation-filter/input';
import { StringNullableListFilter } from '../../prisma/string-nullable-list-filter/input';

@InputType()
export class ItemWhereInput {

    @Field(() => [ItemWhereInput], {nullable:true})
    AND?: Array<ItemWhereInput>;

    @Field(() => [ItemWhereInput], {nullable:true})
    OR?: Array<ItemWhereInput>;

    @Field(() => [ItemWhereInput], {nullable:true})
    NOT?: Array<ItemWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    url?: StringFilter;

    @Field(() => EnumCharacterFilter, {nullable:true})
    character?: EnumCharacterFilter;

    @Field(() => IntFilter, {nullable:true})
    layer?: IntFilter;

    @Field(() => CharacterStatusListRelationFilter, {nullable:true})
    characterStatuses?: CharacterStatusListRelationFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    characterStatusIds?: StringNullableListFilter;
}
