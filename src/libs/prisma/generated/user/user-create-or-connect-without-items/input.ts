import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from '../user-where-unique/input';
import { Type } from 'class-transformer';
import { UserCreateWithoutItemsInput } from '../user-create-without-items/input';

@InputType()
export class UserCreateOrConnectWithoutItemsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutItemsInput, {nullable:false})
    @Type(() => UserCreateWithoutItemsInput)
    create!: UserCreateWithoutItemsInput;
}
