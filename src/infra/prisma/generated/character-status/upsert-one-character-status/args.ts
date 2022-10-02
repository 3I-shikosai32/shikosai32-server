import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterStatusWhereUniqueInput } from '../character-status-where-unique/input';
import { Type } from 'class-transformer';
import { CharacterStatusCreateInput } from '../character-status-create/input';
import { CharacterStatusUpdateInput } from '../character-status-update/input';

@ArgsType()
export class UpsertOneCharacterStatusArgs {

    @Field(() => CharacterStatusWhereUniqueInput, {nullable:false})
    @Type(() => CharacterStatusWhereUniqueInput)
    where!: CharacterStatusWhereUniqueInput;

    @Field(() => CharacterStatusCreateInput, {nullable:false})
    @Type(() => CharacterStatusCreateInput)
    create!: CharacterStatusCreateInput;

    @Field(() => CharacterStatusUpdateInput, {nullable:false})
    @Type(() => CharacterStatusUpdateInput)
    update!: CharacterStatusUpdateInput;
}
