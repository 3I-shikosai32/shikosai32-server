import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCharacterStatusesInput } from '../user-create-without-character-statuses/input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutCharacterStatusesInput } from '../user-create-or-connect-without-character-statuses/input';
import { UserUpsertWithoutCharacterStatusesInput } from '../user-upsert-without-character-statuses/input';
import { UserWhereUniqueInput } from '../user-where-unique/input';
import { UserUpdateWithoutCharacterStatusesInput } from '../user-update-without-character-statuses/input';

@InputType()
export class UserUpdateOneRequiredWithoutCharacterStatusesNestedInput {

    @Field(() => UserCreateWithoutCharacterStatusesInput, {nullable:true})
    @Type(() => UserCreateWithoutCharacterStatusesInput)
    create?: UserCreateWithoutCharacterStatusesInput;

    @Field(() => UserCreateOrConnectWithoutCharacterStatusesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCharacterStatusesInput)
    connectOrCreate?: UserCreateOrConnectWithoutCharacterStatusesInput;

    @Field(() => UserUpsertWithoutCharacterStatusesInput, {nullable:true})
    @Type(() => UserUpsertWithoutCharacterStatusesInput)
    upsert?: UserUpsertWithoutCharacterStatusesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutCharacterStatusesInput, {nullable:true})
    @Type(() => UserUpdateWithoutCharacterStatusesInput)
    update?: UserUpdateWithoutCharacterStatusesInput;
}
