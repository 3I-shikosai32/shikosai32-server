import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterStatusScalarWhereInput } from '../character-status-scalar-where/input';
import { Type } from 'class-transformer';
import { CharacterStatusUpdateManyMutationInput } from '../character-status-update-many-mutation/input';

@InputType()
export class CharacterStatusUpdateManyWithWhereWithoutUserInput {

    @Field(() => CharacterStatusScalarWhereInput, {nullable:false})
    @Type(() => CharacterStatusScalarWhereInput)
    where!: CharacterStatusScalarWhereInput;

    @Field(() => CharacterStatusUpdateManyMutationInput, {nullable:false})
    @Type(() => CharacterStatusUpdateManyMutationInput)
    data!: CharacterStatusUpdateManyMutationInput;
}
