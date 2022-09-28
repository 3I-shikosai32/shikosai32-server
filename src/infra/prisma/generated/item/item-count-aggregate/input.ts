import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ItemCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    url?: true;

    @Field(() => Boolean, {nullable:true})
    character?: true;

    @Field(() => Boolean, {nullable:true})
    layer?: true;

    @Field(() => Boolean, {nullable:true})
    characterStatusIds?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
