import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterStatusWhereUniqueInput } from '../character-status-where-unique/input';
import { Type } from 'class-transformer';
import { CharacterStatusCreateWithoutItemCompletedHistoriesInput } from '../character-status-create-without-item-completed-histories/input';

@InputType()
export class CharacterStatusCreateOrConnectWithoutItemCompletedHistoriesInput {

    @Field(() => CharacterStatusWhereUniqueInput, {nullable:false})
    @Type(() => CharacterStatusWhereUniqueInput)
    where!: CharacterStatusWhereUniqueInput;

    @Field(() => CharacterStatusCreateWithoutItemCompletedHistoriesInput, {nullable:false})
    @Type(() => CharacterStatusCreateWithoutItemCompletedHistoriesInput)
    create!: CharacterStatusCreateWithoutItemCompletedHistoriesInput;
}
