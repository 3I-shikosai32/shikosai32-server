import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Character } from '../../prisma/character/enum';
import { Int } from '@nestjs/graphql';
import { CharacterStatus } from '../../character-status/character-status/model';
import { ItemCount } from '../item-count/output';

@ObjectType()
export class Item {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    iconUrl!: string;

    @Field(() => String, {nullable:false})
    layerUrl!: string;

    @Field(() => Character, {nullable:false})
    character!: keyof typeof Character;

    @Field(() => Int, {nullable:false})
    layer!: number;

    @Field(() => [CharacterStatus], {nullable:true})
    characterStatuses?: Array<CharacterStatus>;

    @Field(() => [String], {nullable:true})
    characterStatusIds!: Array<string>;

    @Field(() => ItemCount, {nullable:false})
    _count?: ItemCount;
}
