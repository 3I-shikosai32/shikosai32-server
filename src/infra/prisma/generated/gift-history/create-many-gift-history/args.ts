import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GiftHistoryCreateManyInput } from '../gift-history-create-many/input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyGiftHistoryArgs {

    @Field(() => [GiftHistoryCreateManyInput], {nullable:false})
    @Type(() => GiftHistoryCreateManyInput)
    data!: Array<GiftHistoryCreateManyInput>;
}
