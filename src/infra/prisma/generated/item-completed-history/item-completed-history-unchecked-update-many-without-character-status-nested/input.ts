import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemCompletedHistoryCreateWithoutCharacterStatusInput } from '../item-completed-history-create-without-character-status/input';
import { Type } from 'class-transformer';
import { ItemCompletedHistoryCreateOrConnectWithoutCharacterStatusInput } from '../item-completed-history-create-or-connect-without-character-status/input';
import { ItemCompletedHistoryUpsertWithWhereUniqueWithoutCharacterStatusInput } from '../item-completed-history-upsert-with-where-unique-without-character-status/input';
import { ItemCompletedHistoryCreateManyCharacterStatusInputEnvelope } from '../item-completed-history-create-many-character-status-input-envelope/input';
import { ItemCompletedHistoryWhereUniqueInput } from '../item-completed-history-where-unique/input';
import { ItemCompletedHistoryUpdateWithWhereUniqueWithoutCharacterStatusInput } from '../item-completed-history-update-with-where-unique-without-character-status/input';
import { ItemCompletedHistoryUpdateManyWithWhereWithoutCharacterStatusInput } from '../item-completed-history-update-many-with-where-without-character-status/input';
import { ItemCompletedHistoryScalarWhereInput } from '../item-completed-history-scalar-where/input';

@InputType()
export class ItemCompletedHistoryUncheckedUpdateManyWithoutCharacterStatusNestedInput {

    @Field(() => [ItemCompletedHistoryCreateWithoutCharacterStatusInput], {nullable:true})
    @Type(() => ItemCompletedHistoryCreateWithoutCharacterStatusInput)
    create?: Array<ItemCompletedHistoryCreateWithoutCharacterStatusInput>;

    @Field(() => [ItemCompletedHistoryCreateOrConnectWithoutCharacterStatusInput], {nullable:true})
    @Type(() => ItemCompletedHistoryCreateOrConnectWithoutCharacterStatusInput)
    connectOrCreate?: Array<ItemCompletedHistoryCreateOrConnectWithoutCharacterStatusInput>;

    @Field(() => [ItemCompletedHistoryUpsertWithWhereUniqueWithoutCharacterStatusInput], {nullable:true})
    @Type(() => ItemCompletedHistoryUpsertWithWhereUniqueWithoutCharacterStatusInput)
    upsert?: Array<ItemCompletedHistoryUpsertWithWhereUniqueWithoutCharacterStatusInput>;

    @Field(() => ItemCompletedHistoryCreateManyCharacterStatusInputEnvelope, {nullable:true})
    @Type(() => ItemCompletedHistoryCreateManyCharacterStatusInputEnvelope)
    createMany?: ItemCompletedHistoryCreateManyCharacterStatusInputEnvelope;

    @Field(() => [ItemCompletedHistoryWhereUniqueInput], {nullable:true})
    @Type(() => ItemCompletedHistoryWhereUniqueInput)
    set?: Array<ItemCompletedHistoryWhereUniqueInput>;

    @Field(() => [ItemCompletedHistoryWhereUniqueInput], {nullable:true})
    @Type(() => ItemCompletedHistoryWhereUniqueInput)
    disconnect?: Array<ItemCompletedHistoryWhereUniqueInput>;

    @Field(() => [ItemCompletedHistoryWhereUniqueInput], {nullable:true})
    @Type(() => ItemCompletedHistoryWhereUniqueInput)
    delete?: Array<ItemCompletedHistoryWhereUniqueInput>;

    @Field(() => [ItemCompletedHistoryWhereUniqueInput], {nullable:true})
    @Type(() => ItemCompletedHistoryWhereUniqueInput)
    connect?: Array<ItemCompletedHistoryWhereUniqueInput>;

    @Field(() => [ItemCompletedHistoryUpdateWithWhereUniqueWithoutCharacterStatusInput], {nullable:true})
    @Type(() => ItemCompletedHistoryUpdateWithWhereUniqueWithoutCharacterStatusInput)
    update?: Array<ItemCompletedHistoryUpdateWithWhereUniqueWithoutCharacterStatusInput>;

    @Field(() => [ItemCompletedHistoryUpdateManyWithWhereWithoutCharacterStatusInput], {nullable:true})
    @Type(() => ItemCompletedHistoryUpdateManyWithWhereWithoutCharacterStatusInput)
    updateMany?: Array<ItemCompletedHistoryUpdateManyWithWhereWithoutCharacterStatusInput>;

    @Field(() => [ItemCompletedHistoryScalarWhereInput], {nullable:true})
    @Type(() => ItemCompletedHistoryScalarWhereInput)
    deleteMany?: Array<ItemCompletedHistoryScalarWhereInput>;
}
