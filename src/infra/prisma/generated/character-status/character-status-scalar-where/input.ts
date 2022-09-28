import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../../prisma/string-filter/input';
import { EnumCharacterFilter } from '../../prisma/enum-character-filter/input';
import { IntFilter } from '../../prisma/int-filter/input';
import { StringNullableListFilter } from '../../prisma/string-nullable-list-filter/input';

@InputType()
export class CharacterStatusScalarWhereInput {

    @Field(() => [CharacterStatusScalarWhereInput], {nullable:true})
    AND?: Array<CharacterStatusScalarWhereInput>;

    @Field(() => [CharacterStatusScalarWhereInput], {nullable:true})
    OR?: Array<CharacterStatusScalarWhereInput>;

    @Field(() => [CharacterStatusScalarWhereInput], {nullable:true})
    NOT?: Array<CharacterStatusScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => EnumCharacterFilter, {nullable:true})
    character?: EnumCharacterFilter;

    @Field(() => StringFilter, {nullable:true})
    iconUrl?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    avatarUrl?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    characterPointDay1?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    characterPointDay2?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    itemIds?: StringNullableListFilter;
}
