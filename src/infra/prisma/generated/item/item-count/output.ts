import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ItemCount {

    @Field(() => Int, {nullable:false})
    characterStatuses?: number;
}
