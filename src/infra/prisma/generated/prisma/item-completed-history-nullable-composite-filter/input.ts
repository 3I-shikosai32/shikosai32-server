import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemCompletedHistoryObjectEqualityInput } from '../item-completed-history-object-equality/input';
import { ItemCompletedHistoryWhereInput } from '../../item-completed-history/item-completed-history-where/input';

@InputType()
export class ItemCompletedHistoryNullableCompositeFilter {

    @Field(() => ItemCompletedHistoryObjectEqualityInput, {nullable:true})
    equals?: ItemCompletedHistoryObjectEqualityInput;

    @Field(() => ItemCompletedHistoryWhereInput, {nullable:true})
    is?: ItemCompletedHistoryWhereInput;

    @Field(() => ItemCompletedHistoryWhereInput, {nullable:true})
    isNot?: ItemCompletedHistoryWhereInput;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
