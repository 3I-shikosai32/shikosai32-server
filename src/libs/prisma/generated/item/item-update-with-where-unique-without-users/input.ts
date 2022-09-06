import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemWhereUniqueInput } from '../item-where-unique/input';
import { Type } from 'class-transformer';
import { ItemUpdateWithoutUsersInput } from '../item-update-without-users/input';

@InputType()
export class ItemUpdateWithWhereUniqueWithoutUsersInput {

    @Field(() => ItemWhereUniqueInput, {nullable:false})
    @Type(() => ItemWhereUniqueInput)
    where!: ItemWhereUniqueInput;

    @Field(() => ItemUpdateWithoutUsersInput, {nullable:false})
    @Type(() => ItemUpdateWithoutUsersInput)
    data!: ItemUpdateWithoutUsersInput;
}
