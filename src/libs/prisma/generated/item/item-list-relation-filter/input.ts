import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemWhereInput } from '../item-where/input';

@InputType()
export class ItemListRelationFilter {

    @Field(() => ItemWhereInput, {nullable:true})
    every?: ItemWhereInput;

    @Field(() => ItemWhereInput, {nullable:true})
    some?: ItemWhereInput;

    @Field(() => ItemWhereInput, {nullable:true})
    none?: ItemWhereInput;
}
