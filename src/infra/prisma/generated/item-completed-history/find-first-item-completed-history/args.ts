import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemCompletedHistoryWhereInput } from '../item-completed-history-where/input';
import { Type } from 'class-transformer';
import { ItemCompletedHistoryOrderByWithRelationInput } from '../item-completed-history-order-by-with-relation/input';
import { ItemCompletedHistoryWhereUniqueInput } from '../item-completed-history-where-unique/input';
import { Int } from '@nestjs/graphql';
import { ItemCompletedHistoryScalarFieldEnum } from '../item-completed-history-scalar-field/enum';

@ArgsType()
export class FindFirstItemCompletedHistoryArgs {

    @Field(() => ItemCompletedHistoryWhereInput, {nullable:true})
    @Type(() => ItemCompletedHistoryWhereInput)
    where?: ItemCompletedHistoryWhereInput;

    @Field(() => [ItemCompletedHistoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ItemCompletedHistoryOrderByWithRelationInput>;

    @Field(() => ItemCompletedHistoryWhereUniqueInput, {nullable:true})
    cursor?: ItemCompletedHistoryWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ItemCompletedHistoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ItemCompletedHistoryScalarFieldEnum>;
}
