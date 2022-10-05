import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemCompletedHistoryWhereUniqueInput } from '../item-completed-history-where-unique/input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneItemCompletedHistoryArgs {

    @Field(() => ItemCompletedHistoryWhereUniqueInput, {nullable:false})
    @Type(() => ItemCompletedHistoryWhereUniqueInput)
    where!: ItemCompletedHistoryWhereUniqueInput;
}
