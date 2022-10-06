import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemCompletedHistoryWhereInput } from '../item-completed-history-where/input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyItemCompletedHistoryArgs {

    @Field(() => ItemCompletedHistoryWhereInput, {nullable:true})
    @Type(() => ItemCompletedHistoryWhereInput)
    where?: ItemCompletedHistoryWhereInput;
}
