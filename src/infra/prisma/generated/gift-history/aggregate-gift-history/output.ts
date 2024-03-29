import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GiftHistoryCountAggregate } from '../gift-history-count-aggregate/output';
import { GiftHistoryMinAggregate } from '../gift-history-min-aggregate/output';
import { GiftHistoryMaxAggregate } from '../gift-history-max-aggregate/output';

@ObjectType()
export class AggregateGiftHistory {

    @Field(() => GiftHistoryCountAggregate, {nullable:true})
    _count?: GiftHistoryCountAggregate;

    @Field(() => GiftHistoryMinAggregate, {nullable:true})
    _min?: GiftHistoryMinAggregate;

    @Field(() => GiftHistoryMaxAggregate, {nullable:true})
    _max?: GiftHistoryMaxAggregate;
}
