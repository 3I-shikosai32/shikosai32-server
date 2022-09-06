import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from '../user-where-unique/input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutItemsInput } from '../user-update-without-items/input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutItemsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutItemsInput, {nullable:false})
    @Type(() => UserUpdateWithoutItemsInput)
    data!: UserUpdateWithoutItemsInput;
}
