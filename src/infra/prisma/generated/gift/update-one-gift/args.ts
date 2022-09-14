import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GiftUpdateInput } from '../gift-update/input';
import { Type } from 'class-transformer';
import { GiftWhereUniqueInput } from '../gift-where-unique/input';

@ArgsType()
export class UpdateOneGiftArgs {

    @Field(() => GiftUpdateInput, {nullable:false})
    @Type(() => GiftUpdateInput)
    data!: GiftUpdateInput;

    @Field(() => GiftWhereUniqueInput, {nullable:false})
    @Type(() => GiftWhereUniqueInput)
    where!: GiftWhereUniqueInput;
}
