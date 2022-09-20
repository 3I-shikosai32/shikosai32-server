import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GiftHistoryCreateInput } from '../gift-history-create/input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneGiftHistoryArgs {

    @Field(() => GiftHistoryCreateInput, {nullable:false})
    @Type(() => GiftHistoryCreateInput)
    data!: GiftHistoryCreateInput;
}
