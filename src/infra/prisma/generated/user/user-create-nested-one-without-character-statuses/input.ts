import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutCharacterStatusesInput } from '../user-create-without-character-statuses/input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutCharacterStatusesInput } from '../user-create-or-connect-without-character-statuses/input';
import { UserWhereUniqueInput } from '../user-where-unique/input';

@InputType()
export class UserCreateNestedOneWithoutCharacterStatusesInput {

    @Field(() => UserCreateWithoutCharacterStatusesInput, {nullable:true})
    @Type(() => UserCreateWithoutCharacterStatusesInput)
    create?: UserCreateWithoutCharacterStatusesInput;

    @Field(() => UserCreateOrConnectWithoutCharacterStatusesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutCharacterStatusesInput)
    connectOrCreate?: UserCreateOrConnectWithoutCharacterStatusesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
