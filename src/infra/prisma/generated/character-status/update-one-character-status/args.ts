import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterStatusUpdateInput } from '../character-status-update/input';
import { Type } from 'class-transformer';
import { CharacterStatusWhereUniqueInput } from '../character-status-where-unique/input';

@ArgsType()
export class UpdateOneCharacterStatusArgs {

    @Field(() => CharacterStatusUpdateInput, {nullable:false})
    @Type(() => CharacterStatusUpdateInput)
    data!: CharacterStatusUpdateInput;

    @Field(() => CharacterStatusWhereUniqueInput, {nullable:false})
    @Type(() => CharacterStatusWhereUniqueInput)
    where!: CharacterStatusWhereUniqueInput;
}
