import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../../prisma/string-filter/input';
import { EnumCharacterFilter } from '../../prisma/enum-character-filter/input';
import { IntFilter } from '../../prisma/int-filter/input';
import { StringNullableListFilter } from '../../prisma/string-nullable-list-filter/input';

@InputType()
export class ItemScalarWhereInput {

    @Field(() => [ItemScalarWhereInput], {nullable:true})
    AND?: Array<ItemScalarWhereInput>;

    @Field(() => [ItemScalarWhereInput], {nullable:true})
    OR?: Array<ItemScalarWhereInput>;

    @Field(() => [ItemScalarWhereInput], {nullable:true})
    NOT?: Array<ItemScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    iconUrl?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    layerUrl?: StringFilter;

    @Field(() => EnumCharacterFilter, {nullable:true})
    character?: EnumCharacterFilter;

    @Field(() => IntFilter, {nullable:true})
    layer?: IntFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    characterStatusIds?: StringNullableListFilter;
}
