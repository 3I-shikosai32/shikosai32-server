import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CaharacterItemObjectEqualityInput {

    @Field(() => Boolean, {nullable:false})
    obtained!: boolean;

    @Field(() => String, {nullable:false})
    itemUrl!: string;
}
