import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GiftHistoryWhereUniqueInput } from '../gift-history-where-unique/input';
import { Type } from 'class-transformer';
import { GiftHistoryCreateInput } from '../gift-history-create/input';
import { GiftHistoryUpdateInput } from '../gift-history-update/input';

@ArgsType()
export class UpsertOneGiftHistoryArgs {

    @Field(() => GiftHistoryWhereUniqueInput, {nullable:false})
    @Type(() => GiftHistoryWhereUniqueInput)
    where!: GiftHistoryWhereUniqueInput;

    @Field(() => GiftHistoryCreateInput, {nullable:false})
    @Type(() => GiftHistoryCreateInput)
    create!: GiftHistoryCreateInput;

    @Field(() => GiftHistoryUpdateInput, {nullable:false})
    @Type(() => GiftHistoryUpdateInput)
    update!: GiftHistoryUpdateInput;
}
