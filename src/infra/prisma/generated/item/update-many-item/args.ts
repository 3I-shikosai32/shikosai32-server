import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemUpdateManyMutationInput } from '../item-update-many-mutation/input';
import { Type } from 'class-transformer';
import { ItemWhereInput } from '../item-where/input';

@ArgsType()
export class UpdateManyItemArgs {

    @Field(() => ItemUpdateManyMutationInput, {nullable:false})
    @Type(() => ItemUpdateManyMutationInput)
    data!: ItemUpdateManyMutationInput;

    @Field(() => ItemWhereInput, {nullable:true})
    @Type(() => ItemWhereInput)
    where?: ItemWhereInput;
}
