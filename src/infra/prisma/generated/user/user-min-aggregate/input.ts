import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    email?: true;

    @Field(() => Boolean, {nullable:true})
    role?: true;

    @Field(() => Boolean, {nullable:true})
    authId?: true;

    @Field(() => Boolean, {nullable:true})
    totalPointDay1?: true;

    @Field(() => Boolean, {nullable:true})
    totalPointDay2?: true;

    @Field(() => Boolean, {nullable:true})
    consumablePoint?: true;

    @Field(() => Boolean, {nullable:true})
    participateGame?: true;

    @Field(() => Boolean, {nullable:true})
    pullableGachaTimes?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;
}
