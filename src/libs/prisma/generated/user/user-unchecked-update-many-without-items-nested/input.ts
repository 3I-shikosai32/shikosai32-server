import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutItemsInput } from '../user-create-without-items/input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutItemsInput } from '../user-create-or-connect-without-items/input';
import { UserUpsertWithWhereUniqueWithoutItemsInput } from '../user-upsert-with-where-unique-without-items/input';
import { UserWhereUniqueInput } from '../user-where-unique/input';
import { UserUpdateWithWhereUniqueWithoutItemsInput } from '../user-update-with-where-unique-without-items/input';
import { UserUpdateManyWithWhereWithoutItemsInput } from '../user-update-many-with-where-without-items/input';
import { UserScalarWhereInput } from '../user-scalar-where/input';

@InputType()
export class UserUncheckedUpdateManyWithoutItemsNestedInput {

    @Field(() => [UserCreateWithoutItemsInput], {nullable:true})
    @Type(() => UserCreateWithoutItemsInput)
    create?: Array<UserCreateWithoutItemsInput>;

    @Field(() => [UserCreateOrConnectWithoutItemsInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutItemsInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutItemsInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutItemsInput], {nullable:true})
    @Type(() => UserUpsertWithWhereUniqueWithoutItemsInput)
    upsert?: Array<UserUpsertWithWhereUniqueWithoutItemsInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    set?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    disconnect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    delete?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutItemsInput], {nullable:true})
    @Type(() => UserUpdateWithWhereUniqueWithoutItemsInput)
    update?: Array<UserUpdateWithWhereUniqueWithoutItemsInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutItemsInput], {nullable:true})
    @Type(() => UserUpdateManyWithWhereWithoutItemsInput)
    updateMany?: Array<UserUpdateManyWithWhereWithoutItemsInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    @Type(() => UserScalarWhereInput)
    deleteMany?: Array<UserScalarWhereInput>;
}
