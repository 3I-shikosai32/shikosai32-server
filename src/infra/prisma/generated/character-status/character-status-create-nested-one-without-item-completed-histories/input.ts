import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterStatusCreateWithoutItemCompletedHistoriesInput } from '../character-status-create-without-item-completed-histories/input';
import { Type } from 'class-transformer';
import { CharacterStatusCreateOrConnectWithoutItemCompletedHistoriesInput } from '../character-status-create-or-connect-without-item-completed-histories/input';
import { CharacterStatusWhereUniqueInput } from '../character-status-where-unique/input';

@InputType()
export class CharacterStatusCreateNestedOneWithoutItemCompletedHistoriesInput {

    @Field(() => CharacterStatusCreateWithoutItemCompletedHistoriesInput, {nullable:true})
    @Type(() => CharacterStatusCreateWithoutItemCompletedHistoriesInput)
    create?: CharacterStatusCreateWithoutItemCompletedHistoriesInput;

    @Field(() => CharacterStatusCreateOrConnectWithoutItemCompletedHistoriesInput, {nullable:true})
    @Type(() => CharacterStatusCreateOrConnectWithoutItemCompletedHistoriesInput)
    connectOrCreate?: CharacterStatusCreateOrConnectWithoutItemCompletedHistoriesInput;

    @Field(() => CharacterStatusWhereUniqueInput, {nullable:true})
    @Type(() => CharacterStatusWhereUniqueInput)
    connect?: CharacterStatusWhereUniqueInput;
}
