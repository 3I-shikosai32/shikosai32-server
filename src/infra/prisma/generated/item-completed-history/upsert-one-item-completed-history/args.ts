import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemCompletedHistoryWhereUniqueInput } from '../item-completed-history-where-unique/input';
import { Type } from 'class-transformer';
import { ItemCompletedHistoryCreateInput } from '../item-completed-history-create/input';
import { ItemCompletedHistoryUpdateInput } from '../item-completed-history-update/input';

@ArgsType()
export class UpsertOneItemCompletedHistoryArgs {

    @Field(() => ItemCompletedHistoryWhereUniqueInput, {nullable:false})
    @Type(() => ItemCompletedHistoryWhereUniqueInput)
    where!: ItemCompletedHistoryWhereUniqueInput;

    @Field(() => ItemCompletedHistoryCreateInput, {nullable:false})
    @Type(() => ItemCompletedHistoryCreateInput)
    create!: ItemCompletedHistoryCreateInput;

    @Field(() => ItemCompletedHistoryUpdateInput, {nullable:false})
    @Type(() => ItemCompletedHistoryUpdateInput)
    update!: ItemCompletedHistoryUpdateInput;
}
