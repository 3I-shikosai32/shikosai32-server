import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemWhereUniqueInput } from '../item-where-unique/input';
import { Type } from 'class-transformer';
import { ItemUpdateWithoutCharacterStatusesInput } from '../item-update-without-character-statuses/input';
import { ItemCreateWithoutCharacterStatusesInput } from '../item-create-without-character-statuses/input';

@InputType()
export class ItemUpsertWithWhereUniqueWithoutCharacterStatusesInput {

    @Field(() => ItemWhereUniqueInput, {nullable:false})
    @Type(() => ItemWhereUniqueInput)
    where!: ItemWhereUniqueInput;

    @Field(() => ItemUpdateWithoutCharacterStatusesInput, {nullable:false})
    @Type(() => ItemUpdateWithoutCharacterStatusesInput)
    update!: ItemUpdateWithoutCharacterStatusesInput;

    @Field(() => ItemCreateWithoutCharacterStatusesInput, {nullable:false})
    @Type(() => ItemCreateWithoutCharacterStatusesInput)
    create!: ItemCreateWithoutCharacterStatusesInput;
}
