import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CharacterStatus } from '../../character-status/character-status/model';

@ObjectType()
export class ItemCompletedHistory {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isDelivered!: boolean;

    @Field(() => CharacterStatus, {nullable:false})
    characterStatus?: CharacterStatus;

    @Field(() => String, {nullable:false})
    characterStatusId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:true})
    deliveredAt!: Date | null;
}
