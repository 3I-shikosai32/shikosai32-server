import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BoolFilter } from '../../prisma/bool-filter/input';
import { StringFilter } from '../../prisma/string-filter/input';

@InputType()
export class CaharacterItemWhereInput {

    @Field(() => [CaharacterItemWhereInput], {nullable:true})
    AND?: Array<CaharacterItemWhereInput>;

    @Field(() => [CaharacterItemWhereInput], {nullable:true})
    OR?: Array<CaharacterItemWhereInput>;

    @Field(() => [CaharacterItemWhereInput], {nullable:true})
    NOT?: Array<CaharacterItemWhereInput>;

    @Field(() => BoolFilter, {nullable:true})
    obtained?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    itemUrl?: StringFilter;
}
