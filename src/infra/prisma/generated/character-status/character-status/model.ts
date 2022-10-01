import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Character } from '../../prisma/character/enum';
import { Int } from '@nestjs/graphql';
import { User } from '../../user/user/model';
import { Item } from '../../item/item/model';
import { CharacterStatusCount } from '../character-status-count/output';

@ObjectType()
export class CharacterStatus {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Character, {nullable:false})
    character!: keyof typeof Character;

    @Field(() => String, {nullable:false})
    iconUrl!: string;

    @Field(() => String, {nullable:false})
    avatarUrl!: string;

    @Field(() => Boolean, {nullable:false})
    isActive!: boolean;

    @Field(() => Int, {nullable:false,defaultValue:0})
    characterPointDay1!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    characterPointDay2!: number;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => [Item], {nullable:true})
    items?: Array<Item>;

    @Field(() => [String], {nullable:true})
    itemIds!: Array<string>;

    @Field(() => CharacterStatusCount, {nullable:false})
    _count?: CharacterStatusCount;
}
