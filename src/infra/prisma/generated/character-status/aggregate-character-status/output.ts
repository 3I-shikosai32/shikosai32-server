import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CharacterStatusCountAggregate } from '../character-status-count-aggregate/output';
import { CharacterStatusAvgAggregate } from '../character-status-avg-aggregate/output';
import { CharacterStatusSumAggregate } from '../character-status-sum-aggregate/output';
import { CharacterStatusMinAggregate } from '../character-status-min-aggregate/output';
import { CharacterStatusMaxAggregate } from '../character-status-max-aggregate/output';

@ObjectType()
export class AggregateCharacterStatus {

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
