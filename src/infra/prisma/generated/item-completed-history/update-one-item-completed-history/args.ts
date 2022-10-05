import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemCompletedHistoryUpdateInput } from '../item-completed-history-update/input';
import { Type } from 'class-transformer';
import { ItemCompletedHistoryWhereUniqueInput } from '../item-completed-history-where-unique/input';

@ArgsType()
export class UpdateOneItemCompletedHistoryArgs {

    @Field(() => ItemCompletedHistoryUpdateInput, {nullable:false})
    @Type(() => ItemCompletedHistoryUpdateInput)
    data!: ItemCompletedHistoryUpdateInput;

    @Field(() => ItemCompletedHistoryWhereUniqueInput, {nullable:false})
    @Type(() => ItemCompletedHistoryWhereUniqueInput)
    where!: ItemCompletedHistoryWhereUniqueInput;
}
