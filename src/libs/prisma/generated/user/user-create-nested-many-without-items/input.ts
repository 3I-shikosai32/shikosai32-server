import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutItemsInput } from '../user-create-without-items/input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutItemsInput } from '../user-create-or-connect-without-items/input';
import { UserWhereUniqueInput } from '../user-where-unique/input';

@InputType()
export class UserCreateNestedManyWithoutItemsInput {

    @Field(() => [UserCreateWithoutItemsInput], {nullable:true})
    @Type(() => UserCreateWithoutItemsInput)
    create?: Array<UserCreateWithoutItemsInput>;

    @Field(() => [UserCreateOrConnectWithoutItemsInput], {nullable:true})
    @Type(() => UserCreateOrConnectWithoutItemsInput)
    connectOrCreate?: Array<UserCreateOrConnectWithoutItemsInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Array<UserWhereUniqueInput>;
}
