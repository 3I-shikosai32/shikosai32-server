import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CaharacterItemCreateInput } from '../../caharacter-item/caharacter-item-create/input';
import { Type } from 'class-transformer';
import { CaharacterItemUpdateManyInput } from '../../caharacter-item/caharacter-item-update-many/input';
import { CaharacterItemDeleteManyInput } from '../caharacter-item-delete-many/input';

@InputType()
export class CaharacterItemListUpdateEnvelopeInput {

    @Field(() => [CaharacterItemCreateInput], {nullable:true})
    @Type(() => CaharacterItemCreateInput)
    set?: Array<CaharacterItemCreateInput>;

    @Field(() => [CaharacterItemCreateInput], {nullable:true})
    push?: Array<CaharacterItemCreateInput>;

    @Field(() => CaharacterItemUpdateManyInput, {nullable:true})
    @Type(() => CaharacterItemUpdateManyInput)
    updateMany?: CaharacterItemUpdateManyInput;

    @Field(() => CaharacterItemDeleteManyInput, {nullable:true})
    @Type(() => CaharacterItemDeleteManyInput)
    deleteMany?: CaharacterItemDeleteManyInput;
}
