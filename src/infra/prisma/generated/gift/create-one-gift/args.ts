import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GiftCreateInput } from '../gift-create/input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneGiftArgs {

    @Field(() => GiftCreateInput, {nullable:false})
    @Type(() => GiftCreateInput)
    data!: GiftCreateInput;
}
