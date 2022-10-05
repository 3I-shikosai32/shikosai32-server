import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ItemCompletedHistoryCountAggregate } from '../item-completed-history-count-aggregate/output';
import { ItemCompletedHistoryMinAggregate } from '../item-completed-history-min-aggregate/output';
import { ItemCompletedHistoryMaxAggregate } from '../item-completed-history-max-aggregate/output';

@ObjectType()
export class AggregateItemCompletedHistory {

    @Field(() => ItemCompletedHistoryCountAggregate, {nullable:true})
    _count?: ItemCompletedHistoryCountAggregate;

    @Field(() => ItemCompletedHistoryMinAggregate, {nullable:true})
    _min?: ItemCompletedHistoryMinAggregate;

    @Field(() => ItemCompletedHistoryMaxAggregate, {nullable:true})
    _max?: ItemCompletedHistoryMaxAggregate;
}
