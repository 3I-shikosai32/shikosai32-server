import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemUpdateInput } from '../item-update/input';
import { Type } from 'class-transformer';
import { ItemWhereUniqueInput } from '../item-where-unique/input';

@ArgsType()
export class UpdateOneItemArgs {

    @Field(() => ItemUpdateInput, {nullable:false})
    @Type(() => ItemUpdateInput)
    data!: ItemUpdateInput;

    @Field(() => ItemWhereUniqueInput, {nullable:false})
    @Type(() => ItemWhereUniqueInput)
    where!: ItemWhereUniqueInput;
}
