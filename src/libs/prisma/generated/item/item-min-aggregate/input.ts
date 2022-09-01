import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ItemMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    url?: true;

    @Field(() => Boolean, {nullable:true})
    character?: true;

    @Field(() => Boolean, {nullable:true})
    layer?: true;
}
