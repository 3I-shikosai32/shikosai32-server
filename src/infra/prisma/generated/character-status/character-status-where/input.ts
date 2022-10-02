import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../../prisma/string-filter/input';
import { EnumCharacterFilter } from '../../prisma/enum-character-filter/input';
import { BoolFilter } from '../../prisma/bool-filter/input';
import { IntFilter } from '../../prisma/int-filter/input';
import { UserRelationFilter } from '../../user/user-relation-filter/input';
import { ItemListRelationFilter } from '../../item/item-list-relation-filter/input';
import { StringNullableListFilter } from '../../prisma/string-nullable-list-filter/input';

@InputType()
export class CharacterStatusWhereInput {

    @Field(() => [CharacterStatusWhereInput], {nullable:true})
    AND?: Array<CharacterStatusWhereInput>;

    @Field(() => [CharacterStatusWhereInput], {nullable:true})
    OR?: Array<CharacterStatusWhereInput>;

    @Field(() => [CharacterStatusWhereInput], {nullable:true})
    NOT?: Array<CharacterStatusWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumCharacterFilter, {nullable:true})
    character?: EnumCharacterFilter;

    @Field(() => StringFilter, {nullable:true})
    iconUrl?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    avatarUrl?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    isActive?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    characterPointDay1?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    characterPointDay2?: IntFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => ItemListRelationFilter, {nullable:true})
    items?: ItemListRelationFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    itemIds?: StringNullableListFilter;
}
