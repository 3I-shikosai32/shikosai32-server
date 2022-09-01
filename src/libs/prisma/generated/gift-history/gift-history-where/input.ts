import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../../prisma/string-filter/input';
import { UserRelationFilter } from '../../user/user-relation-filter/input';
import { GiftRelationFilter } from '../../gift/gift-relation-filter/input';
import { DateTimeFilter } from '../../prisma/date-time-filter/input';

@InputType()
export class GiftHistoryWhereInput {

    @Field(() => [GiftHistoryWhereInput], {nullable:true})
    AND?: Array<GiftHistoryWhereInput>;

    @Field(() => [GiftHistoryWhereInput], {nullable:true})
    OR?: Array<GiftHistoryWhereInput>;

    @Field(() => [GiftHistoryWhereInput], {nullable:true})
    NOT?: Array<GiftHistoryWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => GiftRelationFilter, {nullable:true})
    exchangedGift?: GiftRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    giftId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
