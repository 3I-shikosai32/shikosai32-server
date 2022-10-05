import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterStatusUpdateWithoutItemCompletedHistoriesInput } from '../character-status-update-without-item-completed-histories/input';
import { Type } from 'class-transformer';
import { CharacterStatusCreateWithoutItemCompletedHistoriesInput } from '../character-status-create-without-item-completed-histories/input';

@InputType()
export class CharacterStatusUpsertWithoutItemCompletedHistoriesInput {

    @Field(() => CharacterStatusUpdateWithoutItemCompletedHistoriesInput, {nullable:false})
    @Type(() => CharacterStatusUpdateWithoutItemCompletedHistoriesInput)
    update!: CharacterStatusUpdateWithoutItemCompletedHistoriesInput;

    @Field(() => CharacterStatusCreateWithoutItemCompletedHistoriesInput, {nullable:false})
    @Type(() => CharacterStatusCreateWithoutItemCompletedHistoriesInput)
    create!: CharacterStatusCreateWithoutItemCompletedHistoriesInput;
}
