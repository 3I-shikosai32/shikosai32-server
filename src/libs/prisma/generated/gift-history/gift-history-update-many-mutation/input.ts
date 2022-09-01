import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class GiftHistoryUpdateManyMutationInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
