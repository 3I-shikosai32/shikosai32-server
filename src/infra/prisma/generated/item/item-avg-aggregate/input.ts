import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ItemAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    layer?: true;
}
