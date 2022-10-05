import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemCompletedHistoryUpdateManyMutationInput } from '../item-completed-history-update-many-mutation/input';
import { Type } from 'class-transformer';
import { ItemCompletedHistoryWhereInput } from '../item-completed-history-where/input';

@ArgsType()
export class UpdateManyItemCompletedHistoryArgs {

    @Field(() => ItemCompletedHistoryUpdateManyMutationInput, {nullable:false})
    @Type(() => ItemCompletedHistoryUpdateManyMutationInput)
    data!: ItemCompletedHistoryUpdateManyMutationInput;

    @Field(() => ItemCompletedHistoryWhereInput, {nullable:true})
    @Type(() => ItemCompletedHistoryWhereInput)
    where?: ItemCompletedHistoryWhereInput;
}
