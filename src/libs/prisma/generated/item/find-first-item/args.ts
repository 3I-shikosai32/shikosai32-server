import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemWhereInput } from '../item-where/input';
import { Type } from 'class-transformer';
import { ItemOrderByWithRelationInput } from '../item-order-by-with-relation/input';
import { ItemWhereUniqueInput } from '../item-where-unique/input';
import { Int } from '@nestjs/graphql';
import { ItemScalarFieldEnum } from '../item-scalar-field/enum';

@ArgsType()
export class FindFirstItemArgs {

    @Field(() => ItemWhereInput, {nullable:true})
    @Type(() => ItemWhereInput)
    where?: ItemWhereInput;

    @Field(() => [ItemOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ItemOrderByWithRelationInput>;

    @Field(() => ItemWhereUniqueInput, {nullable:true})
    cursor?: ItemWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ItemScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ItemScalarFieldEnum>;
}
