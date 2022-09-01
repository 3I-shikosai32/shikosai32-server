import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GiftWhereInput } from '../gift-where/input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyGiftArgs {

    @Field(() => GiftWhereInput, {nullable:true})
    @Type(() => GiftWhereInput)
    where?: GiftWhereInput;
}
