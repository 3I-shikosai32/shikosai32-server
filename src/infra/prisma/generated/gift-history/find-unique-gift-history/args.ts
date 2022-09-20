import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GiftHistoryWhereUniqueInput } from '../gift-history-where-unique/input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueGiftHistoryArgs {

    @Field(() => GiftHistoryWhereUniqueInput, {nullable:false})
    @Type(() => GiftHistoryWhereUniqueInput)
    where!: GiftHistoryWhereUniqueInput;
}
