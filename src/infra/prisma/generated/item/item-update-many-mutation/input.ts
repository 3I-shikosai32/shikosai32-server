import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Character } from '../../prisma/character/enum';
import { Int } from '@nestjs/graphql';

@InputType()
export class ItemUpdateManyMutationInput {

    @Field(() => String, {nullable:true})
    url?: string;

    @Field(() => Character, {nullable:true})
    character?: keyof typeof Character;

    @Field(() => Int, {nullable:true})
    layer?: number;

    @Field(() => [String], {nullable:true})
    userIds?: Array<string>;
}