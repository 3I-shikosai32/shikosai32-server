import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GiftHistoryWhereInput } from '../gift-history-where/input';
import { Type } from 'class-transformer';
import { GiftHistoryOrderByWithRelationInput } from '../gift-history-order-by-with-relation/input';
import { GiftHistoryWhereUniqueInput } from '../gift-history-where-unique/input';
import { Int } from '@nestjs/graphql';
import { GiftHistoryScalarFieldEnum } from '../gift-history-scalar-field/enum';

@ArgsType()
export class FindManyGiftHistoryArgs {

    @Field(() => GiftHistoryWhereInput, {nullable:true})
    @Type(() => GiftHistoryWhereInput)
    where?: GiftHistoryWhereInput;

    @Field(() => [GiftHistoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GiftHistoryOrderByWithRelationInput>;

    @Field(() => GiftHistoryWhereUniqueInput, {nullable:true})
    cursor?: GiftHistoryWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [GiftHistoryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof GiftHistoryScalarFieldEnum>;
}
