import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemCompletedHistoryCreateInput } from '../../item-completed-history/item-completed-history-create/input';
import { Type } from 'class-transformer';
import { ItemCompletedHistoryUpsertInput } from '../../item-completed-history/item-completed-history-upsert/input';

@InputType()
export class ItemCompletedHistoryNullableUpdateEnvelopeInput {

    @Field(() => ItemCompletedHistoryCreateInput, {nullable:true})
    @Type(() => ItemCompletedHistoryCreateInput)
    set?: ItemCompletedHistoryCreateInput;

    @Field(() => ItemCompletedHistoryUpsertInput, {nullable:true})
    @Type(() => ItemCompletedHistoryUpsertInput)
    upsert?: ItemCompletedHistoryUpsertInput;

    @Field(() => Boolean, {nullable:true})
    unset?: boolean;
}
