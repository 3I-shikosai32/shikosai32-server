import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Character } from '../../prisma/character/enum';
import { Int } from '@nestjs/graphql';
import { UserUncheckedUpdateManyWithoutItemsNestedInput } from '../../user/user-unchecked-update-many-without-items-nested/input';

@InputType()
export class ItemUncheckedUpdateInput {

    @Field(() => String, {nullable:true})
    url?: string;

    @Field(() => Character, {nullable:true})
    character?: keyof typeof Character;

    @Field(() => Int, {nullable:true})
    layer?: number;

    @Field(() => UserUncheckedUpdateManyWithoutItemsNestedInput, {nullable:true})
    users?: UserUncheckedUpdateManyWithoutItemsNestedInput;

    @Field(() => [String], {nullable:true})
    userIds?: Array<string>;
}
