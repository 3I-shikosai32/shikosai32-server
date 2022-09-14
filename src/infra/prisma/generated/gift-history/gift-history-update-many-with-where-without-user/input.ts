import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GiftHistoryScalarWhereInput } from '../gift-history-scalar-where/input';
import { Type } from 'class-transformer';
import { GiftHistoryUpdateManyMutationInput } from '../gift-history-update-many-mutation/input';

@InputType()
export class GiftHistoryUpdateManyWithWhereWithoutUserInput {

    @Field(() => GiftHistoryScalarWhereInput, {nullable:false})
    @Type(() => GiftHistoryScalarWhereInput)
    where!: GiftHistoryScalarWhereInput;

    @Field(() => GiftHistoryUpdateManyMutationInput, {nullable:false})
    @Type(() => GiftHistoryUpdateManyMutationInput)
    data!: GiftHistoryUpdateManyMutationInput;
}
