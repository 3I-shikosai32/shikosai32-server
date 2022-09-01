import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GiftName } from '../gift-name/enum';
import { NestedIntFilter } from '../nested-int-filter/input';
import { NestedEnumGiftNameFilter } from '../nested-enum-gift-name-filter/input';

@InputType()
export class NestedEnumGiftNameWithAggregatesFilter {

    @Field(() => GiftName, {nullable:true})
    equals?: keyof typeof GiftName;

    @Field(() => [GiftName], {nullable:true})
    in?: Array<keyof typeof GiftName>;

    @Field(() => [GiftName], {nullable:true})
    notIn?: Array<keyof typeof GiftName>;

    @Field(() => NestedEnumGiftNameWithAggregatesFilter, {nullable:true})
    not?: NestedEnumGiftNameWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumGiftNameFilter, {nullable:true})
    _min?: NestedEnumGiftNameFilter;

    @Field(() => NestedEnumGiftNameFilter, {nullable:true})
    _max?: NestedEnumGiftNameFilter;
}
