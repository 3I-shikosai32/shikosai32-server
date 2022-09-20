import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GiftHistoryWhereInput } from '../gift-history-where/input';

@InputType()
export class GiftHistoryListRelationFilter {

    @Field(() => GiftHistoryWhereInput, {nullable:true})
    every?: GiftHistoryWhereInput;

    @Field(() => GiftHistoryWhereInput, {nullable:true})
    some?: GiftHistoryWhereInput;

    @Field(() => GiftHistoryWhereInput, {nullable:true})
    none?: GiftHistoryWhereInput;
}
