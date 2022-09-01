import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CaharacterItem {

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    obtained!: boolean;

    @Field(() => String, {nullable:false})
    itemUrl!: string;
}
