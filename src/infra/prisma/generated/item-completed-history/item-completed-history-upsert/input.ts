import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemCompletedHistoryCreateInput } from '../item-completed-history-create/input';
import { Type } from 'class-transformer';
import { ItemCompletedHistoryUpdateInput } from '../item-completed-history-update/input';

@InputType()
export class ItemCompletedHistoryUpsertInput {

    @Field(() => ItemCompletedHistoryCreateInput, {nullable:false})
    @Type(() => ItemCompletedHistoryCreateInput)
    set!: ItemCompletedHistoryCreateInput;

    @Field(() => ItemCompletedHistoryUpdateInput, {nullable:false})
    @Type(() => ItemCompletedHistoryUpdateInput)
    update!: ItemCompletedHistoryUpdateInput;
}
