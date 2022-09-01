import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CaharacterItemUpdateInput {

    @Field(() => Boolean, {nullable:true})
    obtained?: boolean;

    @Field(() => String, {nullable:true})
    itemUrl?: string;
}
