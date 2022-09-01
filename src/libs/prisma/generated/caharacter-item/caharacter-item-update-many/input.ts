import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CaharacterItemWhereInput } from '../caharacter-item-where/input';
import { Type } from 'class-transformer';
import { CaharacterItemUpdateInput } from '../caharacter-item-update/input';

@InputType()
export class CaharacterItemUpdateManyInput {

    @Field(() => CaharacterItemWhereInput, {nullable:false})
    @Type(() => CaharacterItemWhereInput)
    where!: CaharacterItemWhereInput;

    @Field(() => CaharacterItemUpdateInput, {nullable:false})
    @Type(() => CaharacterItemUpdateInput)
    data!: CaharacterItemUpdateInput;
}
