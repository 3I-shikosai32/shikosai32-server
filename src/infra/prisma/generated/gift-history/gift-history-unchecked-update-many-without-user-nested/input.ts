import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GiftHistoryCreateWithoutUserInput } from '../gift-history-create-without-user/input';
import { Type } from 'class-transformer';
import { GiftHistoryCreateOrConnectWithoutUserInput } from '../gift-history-create-or-connect-without-user/input';
import { GiftHistoryUpsertWithWhereUniqueWithoutUserInput } from '../gift-history-upsert-with-where-unique-without-user/input';
import { GiftHistoryCreateManyUserInputEnvelope } from '../gift-history-create-many-user-input-envelope/input';
import { GiftHistoryWhereUniqueInput } from '../gift-history-where-unique/input';
import { GiftHistoryUpdateWithWhereUniqueWithoutUserInput } from '../gift-history-update-with-where-unique-without-user/input';
import { GiftHistoryUpdateManyWithWhereWithoutUserInput } from '../gift-history-update-many-with-where-without-user/input';
import { GiftHistoryScalarWhereInput } from '../gift-history-scalar-where/input';

@InputType()
export class GiftHistoryUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [GiftHistoryCreateWithoutUserInput], {nullable:true})
    @Type(() => GiftHistoryCreateWithoutUserInput)
    create?: Array<GiftHistoryCreateWithoutUserInput>;

    @Field(() => [GiftHistoryCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => GiftHistoryCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<GiftHistoryCreateOrConnectWithoutUserInput>;

    @Field(() => [GiftHistoryUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => GiftHistoryUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<GiftHistoryUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => GiftHistoryCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => GiftHistoryCreateManyUserInputEnvelope)
    createMany?: GiftHistoryCreateManyUserInputEnvelope;

    @Field(() => [GiftHistoryWhereUniqueInput], {nullable:true})
    @Type(() => GiftHistoryWhereUniqueInput)
    set?: Array<GiftHistoryWhereUniqueInput>;

    @Field(() => [GiftHistoryWhereUniqueInput], {nullable:true})
    @Type(() => GiftHistoryWhereUniqueInput)
    disconnect?: Array<GiftHistoryWhereUniqueInput>;

    @Field(() => [GiftHistoryWhereUniqueInput], {nullable:true})
    @Type(() => GiftHistoryWhereUniqueInput)
    delete?: Array<GiftHistoryWhereUniqueInput>;

    @Field(() => [GiftHistoryWhereUniqueInput], {nullable:true})
    @Type(() => GiftHistoryWhereUniqueInput)
    connect?: Array<GiftHistoryWhereUniqueInput>;

    @Field(() => [GiftHistoryUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => GiftHistoryUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<GiftHistoryUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [GiftHistoryUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => GiftHistoryUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<GiftHistoryUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [GiftHistoryScalarWhereInput], {nullable:true})
    @Type(() => GiftHistoryScalarWhereInput)
    deleteMany?: Array<GiftHistoryScalarWhereInput>;
}
