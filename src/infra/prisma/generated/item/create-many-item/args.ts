import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemCreateManyInput } from '../item-create-many/input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyItemArgs {

    @Field(() => [ItemCreateManyInput], {nullable:false})
    @Type(() => ItemCreateManyInput)
    data!: Array<ItemCreateManyInput>;
}
