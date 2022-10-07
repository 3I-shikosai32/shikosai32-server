import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemCompletedHistoryCreateInput } from '../../item-completed-history/item-completed-history-create/input';
import { Type } from 'class-transformer';

@InputType()
export class ItemCompletedHistoryNullableCreateEnvelopeInput {

    @Field(() => ItemCompletedHistoryCreateInput, {nullable:true})
    @Type(() => ItemCompletedHistoryCreateInput)
    set?: ItemCompletedHistoryCreateInput;
}
