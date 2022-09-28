import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CharacterStatusSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    characterPointDay1?: true;

    @Field(() => Boolean, {nullable:true})
    characterPointDay2?: true;
}
