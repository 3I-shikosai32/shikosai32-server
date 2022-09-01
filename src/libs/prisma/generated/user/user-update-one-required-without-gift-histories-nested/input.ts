import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutGiftHistoriesInput } from '../user-create-without-gift-histories/input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutGiftHistoriesInput } from '../user-create-or-connect-without-gift-histories/input';
import { UserUpsertWithoutGiftHistoriesInput } from '../user-upsert-without-gift-histories/input';
import { UserWhereUniqueInput } from '../user-where-unique/input';
import { UserUpdateWithoutGiftHistoriesInput } from '../user-update-without-gift-histories/input';

@InputType()
export class UserUpdateOneRequiredWithoutGiftHistoriesNestedInput {

    @Field(() => UserCreateWithoutGiftHistoriesInput, {nullable:true})
    @Type(() => UserCreateWithoutGiftHistoriesInput)
    create?: UserCreateWithoutGiftHistoriesInput;

    @Field(() => UserCreateOrConnectWithoutGiftHistoriesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutGiftHistoriesInput)
    connectOrCreate?: UserCreateOrConnectWithoutGiftHistoriesInput;

    @Field(() => UserUpsertWithoutGiftHistoriesInput, {nullable:true})
    @Type(() => UserUpsertWithoutGiftHistoriesInput)
    upsert?: UserUpsertWithoutGiftHistoriesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutGiftHistoriesInput, {nullable:true})
    @Type(() => UserUpdateWithoutGiftHistoriesInput)
    update?: UserUpdateWithoutGiftHistoriesInput;
}
