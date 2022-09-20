import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GiftWhereInput } from '../gift-where/input';
import { Type } from 'class-transformer';
import { GiftOrderByWithRelationInput } from '../gift-order-by-with-relation/input';
import { GiftWhereUniqueInput } from '../gift-where-unique/input';
import { Int } from '@nestjs/graphql';
import { GiftScalarFieldEnum } from '../gift-scalar-field/enum';

@ArgsType()
export class FindFirstGiftArgs {

    @Field(() => GiftWhereInput, {nullable:true})
    @Type(() => GiftWhereInput)
    where?: GiftWhereInput;

    @Field(() => [GiftOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GiftOrderByWithRelationInput>;

    @Field(() => GiftWhereUniqueInput, {nullable:true})
    cursor?: GiftWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [GiftScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof GiftScalarFieldEnum>;
}
