import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemWhereInput } from '../item-where/input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyItemArgs {

    @Field(() => ItemWhereInput, {nullable:true})
    @Type(() => ItemWhereInput)
    where?: ItemWhereInput;
}
