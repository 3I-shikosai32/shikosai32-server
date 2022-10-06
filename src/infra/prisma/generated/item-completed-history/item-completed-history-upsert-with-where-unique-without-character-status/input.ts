import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemCompletedHistoryWhereUniqueInput } from '../item-completed-history-where-unique/input';
import { Type } from 'class-transformer';
import { ItemCompletedHistoryUpdateWithoutCharacterStatusInput } from '../item-completed-history-update-without-character-status/input';
import { ItemCompletedHistoryCreateWithoutCharacterStatusInput } from '../item-completed-history-create-without-character-status/input';

@InputType()
export class ItemCompletedHistoryUpsertWithWhereUniqueWithoutCharacterStatusInput {

    @Field(() => ItemCompletedHistoryWhereUniqueInput, {nullable:false})
    @Type(() => ItemCompletedHistoryWhereUniqueInput)
    where!: ItemCompletedHistoryWhereUniqueInput;

    @Field(() => ItemCompletedHistoryUpdateWithoutCharacterStatusInput, {nullable:false})
    @Type(() => ItemCompletedHistoryUpdateWithoutCharacterStatusInput)
    update!: ItemCompletedHistoryUpdateWithoutCharacterStatusInput;

    @Field(() => ItemCompletedHistoryCreateWithoutCharacterStatusInput, {nullable:false})
    @Type(() => ItemCompletedHistoryCreateWithoutCharacterStatusInput)
    create!: ItemCompletedHistoryCreateWithoutCharacterStatusInput;
}
