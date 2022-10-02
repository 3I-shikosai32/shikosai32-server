import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemWhereUniqueInput } from '../item-where-unique/input';
import { Type } from 'class-transformer';
import { ItemCreateWithoutCharacterStatusesInput } from '../item-create-without-character-statuses/input';

@InputType()
export class ItemCreateOrConnectWithoutCharacterStatusesInput {

    @Field(() => ItemWhereUniqueInput, {nullable:false})
    @Type(() => ItemWhereUniqueInput)
    where!: ItemWhereUniqueInput;

    @Field(() => ItemCreateWithoutCharacterStatusesInput, {nullable:false})
    @Type(() => ItemCreateWithoutCharacterStatusesInput)
    create!: ItemCreateWithoutCharacterStatusesInput;
}
