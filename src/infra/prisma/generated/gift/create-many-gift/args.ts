import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GiftCreateManyInput } from '../gift-create-many/input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyGiftArgs {

    @Field(() => [GiftCreateManyInput], {nullable:false})
    @Type(() => GiftCreateManyInput)
    data!: Array<GiftCreateManyInput>;
}
