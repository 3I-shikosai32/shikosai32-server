import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GiftHistoryCreateWithoutUserInput } from '../gift-history-create-without-user/input';
import { Type } from 'class-transformer';
import { GiftHistoryCreateOrConnectWithoutUserInput } from '../gift-history-create-or-connect-without-user/input';
import { GiftHistoryCreateManyUserInputEnvelope } from '../gift-history-create-many-user-input-envelope/input';
import { GiftHistoryWhereUniqueInput } from '../gift-history-where-unique/input';

@InputType()
export class GiftHistoryUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [GiftHistoryCreateWithoutUserInput], {nullable:true})
    @Type(() => GiftHistoryCreateWithoutUserInput)
    create?: Array<GiftHistoryCreateWithoutUserInput>;

    @Field(() => [GiftHistoryCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => GiftHistoryCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<GiftHistoryCreateOrConnectWithoutUserInput>;

    @Field(() => GiftHistoryCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => GiftHistoryCreateManyUserInputEnvelope)
    createMany?: GiftHistoryCreateManyUserInputEnvelope;

    @Field(() => [GiftHistoryWhereUniqueInput], {nullable:true})
    @Type(() => GiftHistoryWhereUniqueInput)
    connect?: Array<GiftHistoryWhereUniqueInput>;
}
