import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GiftHistoryUpdateInput } from '../gift-history-update/input';
import { Type } from 'class-transformer';
import { GiftHistoryWhereUniqueInput } from '../gift-history-where-unique/input';

@ArgsType()
export class UpdateOneGiftHistoryArgs {

    @Field(() => GiftHistoryUpdateInput, {nullable:false})
    @Type(() => GiftHistoryUpdateInput)
    data!: GiftHistoryUpdateInput;

    @Field(() => GiftHistoryWhereUniqueInput, {nullable:false})
    @Type(() => GiftHistoryWhereUniqueInput)
    where!: GiftHistoryWhereUniqueInput;
}
