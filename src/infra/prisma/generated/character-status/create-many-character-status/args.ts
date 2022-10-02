import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterStatusCreateManyInput } from '../character-status-create-many/input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyCharacterStatusArgs {

    @Field(() => [CharacterStatusCreateManyInput], {nullable:false})
    @Type(() => CharacterStatusCreateManyInput)
    data!: Array<CharacterStatusCreateManyInput>;
}
