import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemCompletedHistoryCreateWithoutCharacterStatusInput } from '../item-completed-history-create-without-character-status/input';
import { Type } from 'class-transformer';
import { ItemCompletedHistoryCreateOrConnectWithoutCharacterStatusInput } from '../item-completed-history-create-or-connect-without-character-status/input';
import { ItemCompletedHistoryCreateManyCharacterStatusInputEnvelope } from '../item-completed-history-create-many-character-status-input-envelope/input';
import { ItemCompletedHistoryWhereUniqueInput } from '../item-completed-history-where-unique/input';

@InputType()
export class ItemCompletedHistoryUncheckedCreateNestedManyWithoutCharacterStatusInput {

    @Field(() => [ItemCompletedHistoryCreateWithoutCharacterStatusInput], {nullable:true})
    @Type(() => ItemCompletedHistoryCreateWithoutCharacterStatusInput)
    create?: Array<ItemCompletedHistoryCreateWithoutCharacterStatusInput>;

    @Field(() => [ItemCompletedHistoryCreateOrConnectWithoutCharacterStatusInput], {nullable:true})
    @Type(() => ItemCompletedHistoryCreateOrConnectWithoutCharacterStatusInput)
    connectOrCreate?: Array<ItemCompletedHistoryCreateOrConnectWithoutCharacterStatusInput>;

    @Field(() => ItemCompletedHistoryCreateManyCharacterStatusInputEnvelope, {nullable:true})
    @Type(() => ItemCompletedHistoryCreateManyCharacterStatusInputEnvelope)
    createMany?: ItemCompletedHistoryCreateManyCharacterStatusInputEnvelope;

    @Field(() => [ItemCompletedHistoryWhereUniqueInput], {nullable:true})
    @Type(() => ItemCompletedHistoryWhereUniqueInput)
    connect?: Array<ItemCompletedHistoryWhereUniqueInput>;
}
