import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemCreateInput } from '../item-create/input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneItemArgs {

    @Field(() => ItemCreateInput, {nullable:false})
    @Type(() => ItemCreateInput)
    data!: ItemCreateInput;
}
