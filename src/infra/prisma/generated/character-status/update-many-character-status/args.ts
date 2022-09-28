import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterStatusUpdateManyMutationInput } from '../character-status-update-many-mutation/input';
import { Type } from 'class-transformer';
import { CharacterStatusWhereInput } from '../character-status-where/input';

@ArgsType()
export class UpdateManyCharacterStatusArgs {

    @Field(() => CharacterStatusUpdateManyMutationInput, {nullable:false})
    @Type(() => CharacterStatusUpdateManyMutationInput)
    data!: CharacterStatusUpdateManyMutationInput;

    @Field(() => CharacterStatusWhereInput, {nullable:true})
    @Type(() => CharacterStatusWhereInput)
    where?: CharacterStatusWhereInput;
}
