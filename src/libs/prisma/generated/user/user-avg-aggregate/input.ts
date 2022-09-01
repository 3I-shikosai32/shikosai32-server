import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    totalPointDay1?: true;

    @Field(() => Boolean, {nullable:true})
    totalPointDay2?: true;

    @Field(() => Boolean, {nullable:true})
    consumablePoint?: true;

    @Field(() => Boolean, {nullable:true})
    pullableGachaTimes?: true;
}
