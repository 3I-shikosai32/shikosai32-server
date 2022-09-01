import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GiftWhereUniqueInput } from '../gift-where-unique/input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneGiftArgs {

    @Field(() => GiftWhereUniqueInput, {nullable:false})
    @Type(() => GiftWhereUniqueInput)
    where!: GiftWhereUniqueInput;
}
