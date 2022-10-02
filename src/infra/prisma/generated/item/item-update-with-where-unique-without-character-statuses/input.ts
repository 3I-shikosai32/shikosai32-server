import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemWhereUniqueInput } from '../item-where-unique/input';
import { Type } from 'class-transformer';
import { ItemUpdateWithoutCharacterStatusesInput } from '../item-update-without-character-statuses/input';

@InputType()
export class ItemUpdateWithWhereUniqueWithoutCharacterStatusesInput {

    @Field(() => ItemWhereUniqueInput, {nullable:false})
    @Type(() => ItemWhereUniqueInput)
    where!: ItemWhereUniqueInput;

    @Field(() => ItemUpdateWithoutCharacterStatusesInput, {nullable:false})
    @Type(() => ItemUpdateWithoutCharacterStatusesInput)
    data!: ItemUpdateWithoutCharacterStatusesInput;
}
