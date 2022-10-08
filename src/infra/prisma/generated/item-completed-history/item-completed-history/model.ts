import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ItemCompletedHistory {

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isDelivered!: boolean;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    deliveredAt!: Date | null;
}
