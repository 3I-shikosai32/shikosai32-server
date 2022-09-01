import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../../prisma/string-filter/input';
import { DateTimeFilter } from '../../prisma/date-time-filter/input';

@InputType()
export class GiftHistoryScalarWhereInput {

    @Field(() => [GiftHistoryScalarWhereInput], {nullable:true})
    AND?: Array<GiftHistoryScalarWhereInput>;

    @Field(() => [GiftHistoryScalarWhereInput], {nullable:true})
    OR?: Array<GiftHistoryScalarWhereInput>;

    @Field(() => [GiftHistoryScalarWhereInput], {nullable:true})
    NOT?: Array<GiftHistoryScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    giftId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
