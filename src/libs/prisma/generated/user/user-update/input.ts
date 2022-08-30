import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserUpdateInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    avatarUrl?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
