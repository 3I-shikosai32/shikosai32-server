import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GiftHistoryCreateManyUserInput } from '../gift-history-create-many-user/input';
import { Type } from 'class-transformer';

@InputType()
export class GiftHistoryCreateManyUserInputEnvelope {

    @Field(() => [GiftHistoryCreateManyUserInput], {nullable:false})
    @Type(() => GiftHistoryCreateManyUserInput)
    data!: Array<GiftHistoryCreateManyUserInput>;
}
