import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CaharacterItemWhereInput } from '../../caharacter-item/caharacter-item-where/input';
import { Type } from 'class-transformer';

@InputType()
export class CaharacterItemDeleteManyInput {

    @Field(() => CaharacterItemWhereInput, {nullable:false})
    @Type(() => CaharacterItemWhereInput)
    where!: CaharacterItemWhereInput;
}
