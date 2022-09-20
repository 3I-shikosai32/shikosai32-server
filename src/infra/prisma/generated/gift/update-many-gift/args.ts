import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GiftUpdateManyMutationInput } from '../gift-update-many-mutation/input';
import { Type } from 'class-transformer';
import { GiftWhereInput } from '../gift-where/input';

@ArgsType()
export class UpdateManyGiftArgs {

    @Field(() => GiftUpdateManyMutationInput, {nullable:false})
    @Type(() => GiftUpdateManyMutationInput)
    data!: GiftUpdateManyMutationInput;

    @Field(() => GiftWhereInput, {nullable:true})
    @Type(() => GiftWhereInput)
    where?: GiftWhereInput;
}
