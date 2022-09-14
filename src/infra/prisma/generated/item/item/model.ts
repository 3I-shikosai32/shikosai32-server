import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Character } from '../../prisma/character/enum';
import { Int } from '@nestjs/graphql';
import { User } from '../../user/user/model';
import { ItemCount } from '../item-count/output';

@ObjectType()
export class Item {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => Character, {nullable:false})
    character!: keyof typeof Character;

    @Field(() => Int, {nullable:false})
    layer!: number;

    @Field(() => [User], {nullable:true})
    users?: Array<User>;

    @Field(() => [String], {nullable:true})
    userIds!: Array<string>;

    @Field(() => ItemCount, {nullable:false})
    _count?: ItemCount;
}
