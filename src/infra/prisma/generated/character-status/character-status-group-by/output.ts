import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Character } from '../../prisma/character/enum';
import { Int } from '@nestjs/graphql';
import { CharacterStatusCountAggregate } from '../character-status-count-aggregate/output';
import { CharacterStatusAvgAggregate } from '../character-status-avg-aggregate/output';
import { CharacterStatusSumAggregate } from '../character-status-sum-aggregate/output';
import { CharacterStatusMinAggregate } from '../character-status-min-aggregate/output';
import { CharacterStatusMaxAggregate } from '../character-status-max-aggregate/output';

@ObjectType()
export class CharacterStatusGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Character, {nullable:false})
    character!: keyof typeof Character;

    @Field(() => String, {nullable:false})
    iconUrl!: string;

    @Field(() => String, {nullable:false})
    avatarUrl!: string;

    @Field(() => Int, {nullable:false})
    characterPointDay1!: number;

    @Field(() => Int, {nullable:false})
    characterPointDay2!: number;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => [String], {nullable:true})
    itemIds?: Array<string>;

    @Field(() => CharacterStatusCountAggregate, {nullable:true})
    _count?: CharacterStatusCountAggregate;

    @Field(() => CharacterStatusAvgAggregate, {nullable:true})
    _avg?: CharacterStatusAvgAggregate;

    @Field(() => CharacterStatusSumAggregate, {nullable:true})
    _sum?: CharacterStatusSumAggregate;

    @Field(() => CharacterStatusMinAggregate, {nullable:true})
    _min?: CharacterStatusMinAggregate;

    @Field(() => CharacterStatusMaxAggregate, {nullable:true})
    _max?: CharacterStatusMaxAggregate;
}
