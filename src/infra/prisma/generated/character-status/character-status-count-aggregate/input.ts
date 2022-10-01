import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CharacterStatusCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    character?: true;

    @Field(() => Boolean, {nullable:true})
    iconUrl?: true;

    @Field(() => Boolean, {nullable:true})
    avatarUrl?: true;

    @Field(() => Boolean, {nullable:true})
    isActive?: true;

    @Field(() => Boolean, {nullable:true})
    characterPointDay1?: true;

    @Field(() => Boolean, {nullable:true})
    characterPointDay2?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    itemIds?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
