import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutGiftHistoriesInput } from '../user-update-without-gift-histories/input';
import { Type } from 'class-transformer';
import { UserCreateWithoutGiftHistoriesInput } from '../user-create-without-gift-histories/input';

@InputType()
export class UserUpsertWithoutGiftHistoriesInput {

    @Field(() => UserUpdateWithoutGiftHistoriesInput, {nullable:false})
    @Type(() => UserUpdateWithoutGiftHistoriesInput)
    update!: UserUpdateWithoutGiftHistoriesInput;

    @Field(() => UserCreateWithoutGiftHistoriesInput, {nullable:false})
    @Type(() => UserCreateWithoutGiftHistoriesInput)
    create!: UserCreateWithoutGiftHistoriesInput;
}
