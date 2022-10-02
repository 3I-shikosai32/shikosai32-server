import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class CharacterStatusAvgAggregate {

    @Field(() => Float, {nullable:true})
    characterPointDay1?: number;

    @Field(() => Float, {nullable:true})
    characterPointDay2?: number;
}
