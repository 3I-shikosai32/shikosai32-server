import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GiftName } from '../gift-name/enum';
import { NestedEnumGiftNameFilter } from '../nested-enum-gift-name-filter/input';

@InputType()
export class EnumGiftNameFilter {

    @Field(() => GiftName, {nullable:true})
    equals?: keyof typeof GiftName;

    @Field(() => [GiftName], {nullable:true})
    in?: Array<keyof typeof GiftName>;

    @Field(() => [GiftName], {nullable:true})
    notIn?: Array<keyof typeof GiftName>;

    @Field(() => NestedEnumGiftNameFilter, {nullable:true})
    not?: NestedEnumGiftNameFilter;
}
