import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemWhereUniqueInput } from '../item-where-unique/input';
import { Type } from 'class-transformer';
import { ItemCreateWithoutUsersInput } from '../item-create-without-users/input';

@InputType()
export class ItemCreateOrConnectWithoutUsersInput {

    @Field(() => ItemWhereUniqueInput, {nullable:false})
    @Type(() => ItemWhereUniqueInput)
    where!: ItemWhereUniqueInput;

    @Field(() => ItemCreateWithoutUsersInput, {nullable:false})
    @Type(() => ItemCreateWithoutUsersInput)
    create!: ItemCreateWithoutUsersInput;
}
