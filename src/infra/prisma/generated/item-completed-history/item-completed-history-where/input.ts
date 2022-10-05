import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../../prisma/string-filter/input';
import { BoolFilter } from '../../prisma/bool-filter/input';
import { CharacterStatusRelationFilter } from '../../character-status/character-status-relation-filter/input';
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

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    isDelivered?: BoolFilter;

    @Field(() => CharacterStatusRelationFilter, {nullable:true})
    characterStatus?: CharacterStatusRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    characterStatusId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deliveredAt?: DateTimeNullableFilter;
}
