import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GiftHistoryWhereInput } from '../gift-history-where/input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyGiftHistoryArgs {

    @Field(() => GiftHistoryWhereInput, {nullable:true})
    @Type(() => GiftHistoryWhereInput)
    where?: GiftHistoryWhereInput;
}
