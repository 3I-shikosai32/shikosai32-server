import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterStatusCreateWithoutUserInput } from '../character-status-create-without-user/input';
import { Type } from 'class-transformer';
import { CharacterStatusCreateOrConnectWithoutUserInput } from '../character-status-create-or-connect-without-user/input';
import { CharacterStatusUpsertWithWhereUniqueWithoutUserInput } from '../character-status-upsert-with-where-unique-without-user/input';
import { CharacterStatusCreateManyUserInputEnvelope } from '../character-status-create-many-user-input-envelope/input';
import { CharacterStatusWhereUniqueInput } from '../character-status-where-unique/input';
import { CharacterStatusUpdateWithWhereUniqueWithoutUserInput } from '../character-status-update-with-where-unique-without-user/input';
import { CharacterStatusUpdateManyWithWhereWithoutUserInput } from '../character-status-update-many-with-where-without-user/input';
import { CharacterStatusScalarWhereInput } from '../character-status-scalar-where/input';

@InputType()
export class CharacterStatusUpdateManyWithoutUserNestedInput {

    @Field(() => [CharacterStatusCreateWithoutUserInput], {nullable:true})
    @Type(() => CharacterStatusCreateWithoutUserInput)
    create?: Array<CharacterStatusCreateWithoutUserInput>;

    @Field(() => [CharacterStatusCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => CharacterStatusCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<CharacterStatusCreateOrConnectWithoutUserInput>;

    @Field(() => [CharacterStatusUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => CharacterStatusUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<CharacterStatusUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => CharacterStatusCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => CharacterStatusCreateManyUserInputEnvelope)
    createMany?: CharacterStatusCreateManyUserInputEnvelope;

    @Field(() => [CharacterStatusWhereUniqueInput], {nullable:true})
    @Type(() => CharacterStatusWhereUniqueInput)
    set?: Array<CharacterStatusWhereUniqueInput>;

    @Field(() => [CharacterStatusWhereUniqueInput], {nullable:true})
    @Type(() => CharacterStatusWhereUniqueInput)
    disconnect?: Array<CharacterStatusWhereUniqueInput>;

    @Field(() => [CharacterStatusWhereUniqueInput], {nullable:true})
    @Type(() => CharacterStatusWhereUniqueInput)
    delete?: Array<CharacterStatusWhereUniqueInput>;

    @Field(() => [CharacterStatusWhereUniqueInput], {nullable:true})
    @Type(() => CharacterStatusWhereUniqueInput)
    connect?: Array<CharacterStatusWhereUniqueInput>;

    @Field(() => [CharacterStatusUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => CharacterStatusUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<CharacterStatusUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [CharacterStatusUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => CharacterStatusUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<CharacterStatusUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [CharacterStatusScalarWhereInput], {nullable:true})
    @Type(() => CharacterStatusScalarWhereInput)
    deleteMany?: Array<CharacterStatusScalarWhereInput>;
}
