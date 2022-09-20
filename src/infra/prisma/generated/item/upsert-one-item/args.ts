import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemWhereUniqueInput } from '../item-where-unique/input';
import { Type } from 'class-transformer';
import { ItemCreateInput } from '../item-create/input';
import { ItemUpdateInput } from '../item-update/input';

@ArgsType()
export class UpsertOneItemArgs {

    @Field(() => ItemWhereUniqueInput, {nullable:false})
    @Type(() => ItemWhereUniqueInput)
    where!: ItemWhereUniqueInput;

    @Field(() => ItemCreateInput, {nullable:false})
    @Type(() => ItemCreateInput)
    create!: ItemCreateInput;

    @Field(() => ItemUpdateInput, {nullable:false})
    @Type(() => ItemUpdateInput)
    update!: ItemUpdateInput;
}
