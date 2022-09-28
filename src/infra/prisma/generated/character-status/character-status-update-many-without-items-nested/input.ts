import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterStatusCreateWithoutItemsInput } from '../character-status-create-without-items/input';
import { Type } from 'class-transformer';
import { CharacterStatusCreateOrConnectWithoutItemsInput } from '../character-status-create-or-connect-without-items/input';
import { CharacterStatusUpsertWithWhereUniqueWithoutItemsInput } from '../character-status-upsert-with-where-unique-without-items/input';
import { CharacterStatusWhereUniqueInput } from '../character-status-where-unique/input';
import { CharacterStatusUpdateWithWhereUniqueWithoutItemsInput } from '../character-status-update-with-where-unique-without-items/input';
import { CharacterStatusUpdateManyWithWhereWithoutItemsInput } from '../character-status-update-many-with-where-without-items/input';
import { CharacterStatusScalarWhereInput } from '../character-status-scalar-where/input';

@InputType()
export class CharacterStatusUpdateManyWithoutItemsNestedInput {

    @Field(() => [CharacterStatusCreateWithoutItemsInput], {nullable:true})
    @Type(() => CharacterStatusCreateWithoutItemsInput)
    create?: Array<CharacterStatusCreateWithoutItemsInput>;

    @Field(() => [CharacterStatusCreateOrConnectWithoutItemsInput], {nullable:true})
    @Type(() => CharacterStatusCreateOrConnectWithoutItemsInput)
    connectOrCreate?: Array<CharacterStatusCreateOrConnectWithoutItemsInput>;

    @Field(() => [CharacterStatusUpsertWithWhereUniqueWithoutItemsInput], {nullable:true})
    @Type(() => CharacterStatusUpsertWithWhereUniqueWithoutItemsInput)
    upsert?: Array<CharacterStatusUpsertWithWhereUniqueWithoutItemsInput>;

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

    @Field(() => [CharacterStatusUpdateWithWhereUniqueWithoutItemsInput], {nullable:true})
    @Type(() => CharacterStatusUpdateWithWhereUniqueWithoutItemsInput)
    update?: Array<CharacterStatusUpdateWithWhereUniqueWithoutItemsInput>;

    @Field(() => [CharacterStatusUpdateManyWithWhereWithoutItemsInput], {nullable:true})
    @Type(() => CharacterStatusUpdateManyWithWhereWithoutItemsInput)
    updateMany?: Array<CharacterStatusUpdateManyWithWhereWithoutItemsInput>;

    @Field(() => [CharacterStatusScalarWhereInput], {nullable:true})
    @Type(() => CharacterStatusScalarWhereInput)
    deleteMany?: Array<CharacterStatusScalarWhereInput>;
}
