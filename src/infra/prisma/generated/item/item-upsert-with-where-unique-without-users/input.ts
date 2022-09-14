import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemWhereUniqueInput } from '../item-where-unique/input';
import { Type } from 'class-transformer';
import { ItemUpdateWithoutUsersInput } from '../item-update-without-users/input';
import { ItemCreateWithoutUsersInput } from '../item-create-without-users/input';

@InputType()
export class ItemUpsertWithWhereUniqueWithoutUsersInput {

    @Field(() => ItemWhereUniqueInput, {nullable:false})
    @Type(() => ItemWhereUniqueInput)
    where!: ItemWhereUniqueInput;

    @Field(() => ItemUpdateWithoutUsersInput, {nullable:false})
    @Type(() => ItemUpdateWithoutUsersInput)
    update!: ItemUpdateWithoutUsersInput;

    @Field(() => ItemCreateWithoutUsersInput, {nullable:false})
    @Type(() => ItemCreateWithoutUsersInput)
    create!: ItemCreateWithoutUsersInput;
}
