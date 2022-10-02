import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterStatusWhereUniqueInput } from '../character-status-where-unique/input';
import { Type } from 'class-transformer';
import { CharacterStatusUpdateWithoutUserInput } from '../character-status-update-without-user/input';

@InputType()
export class CharacterStatusUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => CharacterStatusWhereUniqueInput, {nullable:false})
    @Type(() => CharacterStatusWhereUniqueInput)
    where!: CharacterStatusWhereUniqueInput;

    @Field(() => CharacterStatusUpdateWithoutUserInput, {nullable:false})
    @Type(() => CharacterStatusUpdateWithoutUserInput)
    data!: CharacterStatusUpdateWithoutUserInput;
}
