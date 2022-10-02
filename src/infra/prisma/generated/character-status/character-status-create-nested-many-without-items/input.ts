import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterStatusCreateWithoutItemsInput } from '../character-status-create-without-items/input';
import { Type } from 'class-transformer';
import { CharacterStatusCreateOrConnectWithoutItemsInput } from '../character-status-create-or-connect-without-items/input';
import { CharacterStatusWhereUniqueInput } from '../character-status-where-unique/input';

@InputType()
export class CharacterStatusCreateNestedManyWithoutItemsInput {

    @Field(() => [CharacterStatusCreateWithoutItemsInput], {nullable:true})
    @Type(() => CharacterStatusCreateWithoutItemsInput)
    create?: Array<CharacterStatusCreateWithoutItemsInput>;

    @Field(() => [CharacterStatusCreateOrConnectWithoutItemsInput], {nullable:true})
    @Type(() => CharacterStatusCreateOrConnectWithoutItemsInput)
    connectOrCreate?: Array<CharacterStatusCreateOrConnectWithoutItemsInput>;

    @Field(() => [CharacterStatusWhereUniqueInput], {nullable:true})
    @Type(() => CharacterStatusWhereUniqueInput)
    connect?: Array<CharacterStatusWhereUniqueInput>;
}
