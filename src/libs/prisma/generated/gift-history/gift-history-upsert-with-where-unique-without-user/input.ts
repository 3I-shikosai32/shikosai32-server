import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GiftHistoryWhereUniqueInput } from '../gift-history-where-unique/input';
import { Type } from 'class-transformer';
import { GiftHistoryUpdateWithoutUserInput } from '../gift-history-update-without-user/input';
import { GiftHistoryCreateWithoutUserInput } from '../gift-history-create-without-user/input';

@InputType()
export class GiftHistoryUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => GiftHistoryWhereUniqueInput, {nullable:false})
    @Type(() => GiftHistoryWhereUniqueInput)
    where!: GiftHistoryWhereUniqueInput;

    @Field(() => GiftHistoryUpdateWithoutUserInput, {nullable:false})
    @Type(() => GiftHistoryUpdateWithoutUserInput)
    update!: GiftHistoryUpdateWithoutUserInput;

    @Field(() => GiftHistoryCreateWithoutUserInput, {nullable:false})
    @Type(() => GiftHistoryCreateWithoutUserInput)
    create!: GiftHistoryCreateWithoutUserInput;
}
