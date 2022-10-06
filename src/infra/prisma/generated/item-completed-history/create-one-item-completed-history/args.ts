import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemCompletedHistoryCreateInput } from '../item-completed-history-create/input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneItemCompletedHistoryArgs {

    @Field(() => ItemCompletedHistoryCreateInput, {nullable:false})
    @Type(() => ItemCompletedHistoryCreateInput)
    data!: ItemCompletedHistoryCreateInput;
}
