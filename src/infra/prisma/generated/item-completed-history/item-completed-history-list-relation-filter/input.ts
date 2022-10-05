import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemCompletedHistoryWhereInput } from '../item-completed-history-where/input';

@InputType()
export class ItemCompletedHistoryListRelationFilter {

    @Field(() => ItemCompletedHistoryWhereInput, {nullable:true})
    every?: ItemCompletedHistoryWhereInput;

    @Field(() => ItemCompletedHistoryWhereInput, {nullable:true})
    some?: ItemCompletedHistoryWhereInput;

    @Field(() => ItemCompletedHistoryWhereInput, {nullable:true})
    none?: ItemCompletedHistoryWhereInput;
}
