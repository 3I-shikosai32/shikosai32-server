import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    email?: true;

    @Field(() => Boolean, {nullable:true})
    role?: true;

    @Field(() => Boolean, {nullable:true})
    totalPointDay1?: true;

    @Field(() => Boolean, {nullable:true})
    totalPointDay2?: true;

    @Field(() => Boolean, {nullable:true})
    consumablePoint?: true;

    @Field(() => Boolean, {nullable:true})
    character?: true;

    @Field(() => Boolean, {nullable:true})
    iconUrl?: true;

    @Field(() => Boolean, {nullable:true})
    avatarUrl?: true;

    @Field(() => Boolean, {nullable:true})
    itemIds?: true;

    @Field(() => Boolean, {nullable:true})
    participateGame?: true;

    @Field(() => Boolean, {nullable:true})
    pullableGachaTimes?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
