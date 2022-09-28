import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../../prisma/string-with-aggregates-filter/input';
import { EnumRoleWithAggregatesFilter } from '../../prisma/enum-role-with-aggregates-filter/input';
import { IntWithAggregatesFilter } from '../../prisma/int-with-aggregates-filter/input';
import { EnumGameWithAggregatesFilter } from '../../prisma/enum-game-with-aggregates-filter/input';
import { DateTimeWithAggregatesFilter } from '../../prisma/date-time-with-aggregates-filter/input';

@InputType()
export class UserScalarWhereWithAggregatesInput {

    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserScalarWhereWithAggregatesInput>;

    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserScalarWhereWithAggregatesInput>;

    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: StringWithAggregatesFilter;

    @Field(() => EnumRoleWithAggregatesFilter, {nullable:true})
    role?: EnumRoleWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    totalPointDay1?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    totalPointDay2?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    consumablePoint?: IntWithAggregatesFilter;

    @Field(() => EnumGameWithAggregatesFilter, {nullable:true})
    participateGame?: EnumGameWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    pullableGachaTimes?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
