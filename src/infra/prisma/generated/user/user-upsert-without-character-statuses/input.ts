import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutCharacterStatusesInput } from '../user-update-without-character-statuses/input';
import { Type } from 'class-transformer';
import { UserCreateWithoutCharacterStatusesInput } from '../user-create-without-character-statuses/input';

@InputType()
export class UserUpsertWithoutCharacterStatusesInput {

    @Field(() => UserUpdateWithoutCharacterStatusesInput, {nullable:false})
    @Type(() => UserUpdateWithoutCharacterStatusesInput)
    update!: UserUpdateWithoutCharacterStatusesInput;

    @Field(() => UserCreateWithoutCharacterStatusesInput, {nullable:false})
    @Type(() => UserCreateWithoutCharacterStatusesInput)
    create!: UserCreateWithoutCharacterStatusesInput;
}
