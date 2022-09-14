import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from '../user-where-unique/input';
import { Type } from 'class-transformer';
import { UserCreateWithoutGiftHistoriesInput } from '../user-create-without-gift-histories/input';

@InputType()
export class UserCreateOrConnectWithoutGiftHistoriesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutGiftHistoriesInput, {nullable:false})
    @Type(() => UserCreateWithoutGiftHistoriesInput)
    create!: UserCreateWithoutGiftHistoriesInput;
}
