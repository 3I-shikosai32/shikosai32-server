import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterStatusWhereInput } from '../character-status-where/input';
import { Type } from 'class-transformer';
import { CharacterStatusOrderByWithRelationInput } from '../character-status-order-by-with-relation/input';
import { CharacterStatusWhereUniqueInput } from '../character-status-where-unique/input';
import { Int } from '@nestjs/graphql';
import { CharacterStatusScalarFieldEnum } from '../character-status-scalar-field/enum';

@ArgsType()
export class FindManyCharacterStatusArgs {

    @Field(() => CharacterStatusWhereInput, {nullable:true})
    @Type(() => CharacterStatusWhereInput)
    where?: CharacterStatusWhereInput;

    @Field(() => [CharacterStatusOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CharacterStatusOrderByWithRelationInput>;

    @Field(() => CharacterStatusWhereUniqueInput, {nullable:true})
    cursor?: CharacterStatusWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CharacterStatusScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CharacterStatusScalarFieldEnum>;
}
