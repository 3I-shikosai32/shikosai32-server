import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Character } from '../../prisma/character/enum';
import { Int } from '@nestjs/graphql';
import { UserUpdateManyWithoutItemsNestedInput } from '../../user/user-update-many-without-items-nested/input';

@InputType()
export class ItemUpdateInput {

    @Field(() => String, {nullable:true})
    url?: string;

    @Field(() => Character, {nullable:true})
    character?: keyof typeof Character;

    @Field(() => Int, {nullable:true})
    layer?: number;

    @Field(() => UserUpdateManyWithoutItemsNestedInput, {nullable:true})
    users?: UserUpdateManyWithoutItemsNestedInput;

    @Field(() => [String], {nullable:true})
    userIds?: Array<string>;
}
