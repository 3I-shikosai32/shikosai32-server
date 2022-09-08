import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from '../user-where-unique/input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutItemsInput } from '../user-update-without-items/input';
import { UserCreateWithoutItemsInput } from '../user-create-without-items/input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutItemsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutItemsInput, {nullable:false})
    @Type(() => UserUpdateWithoutItemsInput)
    update!: UserUpdateWithoutItemsInput;

    @Field(() => UserCreateWithoutItemsInput, {nullable:false})
    @Type(() => UserCreateWithoutItemsInput)
    create!: UserCreateWithoutItemsInput;
}
