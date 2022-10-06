import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../../prisma/string-filter/input';
import { BoolFilter } from '../../prisma/bool-filter/input';
import { DateTimeFilter } from '../../prisma/date-time-filter/input';
import { DateTimeNullableFilter } from '../../prisma/date-time-nullable-filter/input';

@InputType()
export class ItemCompletedHistoryScalarWhereInput {

    @Field(() => [ItemCompletedHistoryScalarWhereInput], {nullable:true})
    AND?: Array<ItemCompletedHistoryScalarWhereInput>;

    @Field(() => [ItemCompletedHistoryScalarWhereInput], {nullable:true})
    OR?: Array<ItemCompletedHistoryScalarWhereInput>;

    @Field(() => [ItemCompletedHistoryScalarWhereInput], {nullable:true})
    NOT?: Array<ItemCompletedHistoryScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    isDelivered?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    characterStatusId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deliveredAt?: DateTimeNullableFilter;
}
