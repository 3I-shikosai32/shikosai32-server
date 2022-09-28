import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterStatusWhereUniqueInput } from '../character-status-where-unique/input';
import { Type } from 'class-transformer';
import { CharacterStatusUpdateWithoutItemsInput } from '../character-status-update-without-items/input';

@InputType()
export class CharacterStatusUpdateWithWhereUniqueWithoutItemsInput {

    @Field(() => CharacterStatusWhereUniqueInput, {nullable:false})
    @Type(() => CharacterStatusWhereUniqueInput)
    where!: CharacterStatusWhereUniqueInput;

    @Field(() => CharacterStatusUpdateWithoutItemsInput, {nullable:false})
    @Type(() => CharacterStatusUpdateWithoutItemsInput)
    data!: CharacterStatusUpdateWithoutItemsInput;
}
