import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Character } from '../../prisma/character/enum';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ItemMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    url?: string;

    @Field(() => Character, {nullable:true})
    character?: keyof typeof Character;

    @Field(() => Int, {nullable:true})
    layer?: number;
}
