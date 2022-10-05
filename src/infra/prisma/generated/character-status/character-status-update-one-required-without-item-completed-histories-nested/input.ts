import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterStatusCreateWithoutItemCompletedHistoriesInput } from '../character-status-create-without-item-completed-histories/input';
import { Type } from 'class-transformer';
import { CharacterStatusCreateOrConnectWithoutItemCompletedHistoriesInput } from '../character-status-create-or-connect-without-item-completed-histories/input';
import { CharacterStatusUpsertWithoutItemCompletedHistoriesInput } from '../character-status-upsert-without-item-completed-histories/input';
import { CharacterStatusWhereUniqueInput } from '../character-status-where-unique/input';
import { CharacterStatusUpdateWithoutItemCompletedHistoriesInput } from '../character-status-update-without-item-completed-histories/input';

@InputType()
export class CharacterStatusUpdateOneRequiredWithoutItemCompletedHistoriesNestedInput {

    @Field(() => CharacterStatusCreateWithoutItemCompletedHistoriesInput, {nullable:true})
    @Type(() => CharacterStatusCreateWithoutItemCompletedHistoriesInput)
    create?: CharacterStatusCreateWithoutItemCompletedHistoriesInput;

    @Field(() => CharacterStatusCreateOrConnectWithoutItemCompletedHistoriesInput, {nullable:true})
    @Type(() => CharacterStatusCreateOrConnectWithoutItemCompletedHistoriesInput)
    connectOrCreate?: CharacterStatusCreateOrConnectWithoutItemCompletedHistoriesInput;

    @Field(() => CharacterStatusUpsertWithoutItemCompletedHistoriesInput, {nullable:true})
    @Type(() => CharacterStatusUpsertWithoutItemCompletedHistoriesInput)
    upsert?: CharacterStatusUpsertWithoutItemCompletedHistoriesInput;

    @Field(() => CharacterStatusWhereUniqueInput, {nullable:true})
    @Type(() => CharacterStatusWhereUniqueInput)
    connect?: CharacterStatusWhereUniqueInput;

    @Field(() => CharacterStatusUpdateWithoutItemCompletedHistoriesInput, {nullable:true})
    @Type(() => CharacterStatusUpdateWithoutItemCompletedHistoriesInput)
    update?: CharacterStatusUpdateWithoutItemCompletedHistoriesInput;
}
