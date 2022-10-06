import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemCompletedHistoryCreateManyCharacterStatusInput } from '../item-completed-history-create-many-character-status/input';
import { Type } from 'class-transformer';

@InputType()
export class ItemCompletedHistoryCreateManyCharacterStatusInputEnvelope {

    @Field(() => [ItemCompletedHistoryCreateManyCharacterStatusInput], {nullable:false})
    @Type(() => ItemCompletedHistoryCreateManyCharacterStatusInput)
    data!: Array<ItemCompletedHistoryCreateManyCharacterStatusInput>;
}
