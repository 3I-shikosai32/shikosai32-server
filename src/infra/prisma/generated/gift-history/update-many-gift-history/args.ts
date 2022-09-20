import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GiftHistoryUpdateManyMutationInput } from '../gift-history-update-many-mutation/input';
import { Type } from 'class-transformer';
import { GiftHistoryWhereInput } from '../gift-history-where/input';

@ArgsType()
export class UpdateManyGiftHistoryArgs {

    @Field(() => GiftHistoryUpdateManyMutationInput, {nullable:false})
    @Type(() => GiftHistoryUpdateManyMutationInput)
    data!: GiftHistoryUpdateManyMutationInput;

    @Field(() => GiftHistoryWhereInput, {nullable:true})
    @Type(() => GiftHistoryWhereInput)
    where?: GiftHistoryWhereInput;
}
