import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GiftWhereUniqueInput } from '../gift-where-unique/input';
import { Type } from 'class-transformer';
import { GiftCreateInput } from '../gift-create/input';
import { GiftUpdateInput } from '../gift-update/input';

@ArgsType()
export class UpsertOneGiftArgs {

    @Field(() => GiftWhereUniqueInput, {nullable:false})
    @Type(() => GiftWhereUniqueInput)
    where!: GiftWhereUniqueInput;

    @Field(() => GiftCreateInput, {nullable:false})
    @Type(() => GiftCreateInput)
    create!: GiftCreateInput;

    @Field(() => GiftUpdateInput, {nullable:false})
    @Type(() => GiftUpdateInput)
    update!: GiftUpdateInput;
}
