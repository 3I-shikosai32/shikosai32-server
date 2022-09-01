import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ItemSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    layer?: true;
}
