import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CaharacterItemCreateInput {

    @Field(() => Boolean, {nullable:true})
    obtained?: boolean;

    @Field(() => String, {nullable:false})
    itemUrl!: string;
}
