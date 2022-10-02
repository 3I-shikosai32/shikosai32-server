import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from '../user-where-unique/input';
import { Type } from 'class-transformer';
import { UserCreateWithoutCharacterStatusesInput } from '../user-create-without-character-statuses/input';

@InputType()
export class UserCreateOrConnectWithoutCharacterStatusesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutCharacterStatusesInput, {nullable:false})
    @Type(() => UserCreateWithoutCharacterStatusesInput)
    create!: UserCreateWithoutCharacterStatusesInput;
}
