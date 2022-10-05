import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemCompletedHistoryScalarWhereInput } from '../item-completed-history-scalar-where/input';
import { Type } from 'class-transformer';
import { ItemCompletedHistoryUpdateManyMutationInput } from '../item-completed-history-update-many-mutation/input';

@InputType()
export class ItemCompletedHistoryUpdateManyWithWhereWithoutCharacterStatusInput {

    @Field(() => ItemCompletedHistoryScalarWhereInput, {nullable:false})
    @Type(() => ItemCompletedHistoryScalarWhereInput)
    where!: ItemCompletedHistoryScalarWhereInput;

    @Field(() => ItemCompletedHistoryUpdateManyMutationInput, {nullable:false})
    @Type(() => ItemCompletedHistoryUpdateManyMutationInput)
    data!: ItemCompletedHistoryUpdateManyMutationInput;
}
