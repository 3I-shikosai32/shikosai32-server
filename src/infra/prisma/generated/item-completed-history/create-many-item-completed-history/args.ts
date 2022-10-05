import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemCompletedHistoryCreateManyInput } from '../item-completed-history-create-many/input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyItemCompletedHistoryArgs {

    @Field(() => [ItemCompletedHistoryCreateManyInput], {nullable:false})
    @Type(() => ItemCompletedHistoryCreateManyInput)
    data!: Array<ItemCompletedHistoryCreateManyInput>;
}
