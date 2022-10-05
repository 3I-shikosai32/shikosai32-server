import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemCompletedHistoryWhereUniqueInput } from '../item-completed-history-where-unique/input';
import { Type } from 'class-transformer';
import { ItemCompletedHistoryCreateWithoutCharacterStatusInput } from '../item-completed-history-create-without-character-status/input';

@InputType()
export class ItemCompletedHistoryCreateOrConnectWithoutCharacterStatusInput {

    @Field(() => ItemCompletedHistoryWhereUniqueInput, {nullable:false})
    @Type(() => ItemCompletedHistoryWhereUniqueInput)
    where!: ItemCompletedHistoryWhereUniqueInput;

    @Field(() => ItemCompletedHistoryCreateWithoutCharacterStatusInput, {nullable:false})
    @Type(() => ItemCompletedHistoryCreateWithoutCharacterStatusInput)
    create!: ItemCompletedHistoryCreateWithoutCharacterStatusInput;
}
