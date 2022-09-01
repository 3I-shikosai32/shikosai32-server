import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CaharacterItemCreateInput } from '../../caharacter-item/caharacter-item-create/input';
import { Type } from 'class-transformer';

@InputType()
export class CaharacterItemListCreateEnvelopeInput {

    @Field(() => [CaharacterItemCreateInput], {nullable:true})
    @Type(() => CaharacterItemCreateInput)
    set?: Array<CaharacterItemCreateInput>;
}
