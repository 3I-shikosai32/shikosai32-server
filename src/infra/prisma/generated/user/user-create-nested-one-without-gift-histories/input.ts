import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutGiftHistoriesInput } from '../user-create-without-gift-histories/input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutGiftHistoriesInput } from '../user-create-or-connect-without-gift-histories/input';
import { UserWhereUniqueInput } from '../user-where-unique/input';

@InputType()
export class UserCreateNestedOneWithoutGiftHistoriesInput {

    @Field(() => UserCreateWithoutGiftHistoriesInput, {nullable:true})
    @Type(() => UserCreateWithoutGiftHistoriesInput)
    create?: UserCreateWithoutGiftHistoriesInput;

    @Field(() => UserCreateOrConnectWithoutGiftHistoriesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutGiftHistoriesInput)
    connectOrCreate?: UserCreateOrConnectWithoutGiftHistoriesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
