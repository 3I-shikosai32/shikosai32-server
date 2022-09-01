import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CaharacterItemObjectEqualityInput } from '../caharacter-item-object-equality/input';
import { CaharacterItemWhereInput } from '../../caharacter-item/caharacter-item-where/input';

@InputType()
export class CaharacterItemCompositeListFilter {

    @Field(() => [CaharacterItemObjectEqualityInput], {nullable:true})
    equals?: Array<CaharacterItemObjectEqualityInput>;

    @Field(() => CaharacterItemWhereInput, {nullable:true})
    every?: CaharacterItemWhereInput;

    @Field(() => CaharacterItemWhereInput, {nullable:true})
    some?: CaharacterItemWhereInput;

    @Field(() => CaharacterItemWhereInput, {nullable:true})
    none?: CaharacterItemWhereInput;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
