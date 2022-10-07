import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoolFilter } from '../../prisma/bool-filter/input';
import { DateTimeFilter } from '../../prisma/date-time-filter/input';
import { DateTimeNullableFilter } from '../../prisma/date-time-nullable-filter/input';

@InputType()
export class ItemCompletedHistoryWhereInput {

    @Field(() => [ItemCompletedHistoryWhereInput], {nullable:true})
    AND?: Array<ItemCompletedHistoryWhereInput>;

    @Field(() => [ItemCompletedHistoryWhereInput], {nullable:true})
    OR?: Array<ItemCompletedHistoryWhereInput>;

    @Field(() => [ItemCompletedHistoryWhereInput], {nullable:true})
    NOT?: Array<ItemCompletedHistoryWhereInput>;

    @Field(() => BoolFilter, {nullable:true})
    isDelivered?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deliveredAt?: DateTimeNullableFilter;
}
