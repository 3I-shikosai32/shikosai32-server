import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemScalarWhereInput } from '../item-scalar-where/input';
import { Type } from 'class-transformer';
import { ItemUpdateManyMutationInput } from '../item-update-many-mutation/input';

@InputType()
export class ItemUpdateManyWithWhereWithoutUsersInput {

    @Field(() => ItemScalarWhereInput, {nullable:false})
    @Type(() => ItemScalarWhereInput)
    where!: ItemScalarWhereInput;

    @Field(() => ItemUpdateManyMutationInput, {nullable:false})
    @Type(() => ItemUpdateManyMutationInput)
    data!: ItemUpdateManyMutationInput;
}
