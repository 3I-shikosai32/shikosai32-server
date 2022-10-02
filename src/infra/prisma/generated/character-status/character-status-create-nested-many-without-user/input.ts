import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterStatusCreateWithoutUserInput } from '../character-status-create-without-user/input';
import { Type } from 'class-transformer';
import { CharacterStatusCreateOrConnectWithoutUserInput } from '../character-status-create-or-connect-without-user/input';
import { CharacterStatusCreateManyUserInputEnvelope } from '../character-status-create-many-user-input-envelope/input';
import { CharacterStatusWhereUniqueInput } from '../character-status-where-unique/input';

@InputType()
export class CharacterStatusCreateNestedManyWithoutUserInput {

    @Field(() => [CharacterStatusCreateWithoutUserInput], {nullable:true})
    @Type(() => CharacterStatusCreateWithoutUserInput)
    create?: Array<CharacterStatusCreateWithoutUserInput>;

    @Field(() => [CharacterStatusCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => CharacterStatusCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<CharacterStatusCreateOrConnectWithoutUserInput>;

    @Field(() => CharacterStatusCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => CharacterStatusCreateManyUserInputEnvelope)
    createMany?: CharacterStatusCreateManyUserInputEnvelope;

    @Field(() => [CharacterStatusWhereUniqueInput], {nullable:true})
    @Type(() => CharacterStatusWhereUniqueInput)
    connect?: Array<CharacterStatusWhereUniqueInput>;
}
