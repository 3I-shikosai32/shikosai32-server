import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemCreateWithoutUsersInput } from '../item-create-without-users/input';
import { Type } from 'class-transformer';
import { ItemCreateOrConnectWithoutUsersInput } from '../item-create-or-connect-without-users/input';
import { ItemWhereUniqueInput } from '../item-where-unique/input';

@InputType()
export class ItemUncheckedCreateNestedManyWithoutUsersInput {

    @Field(() => [ItemCreateWithoutUsersInput], {nullable:true})
    @Type(() => ItemCreateWithoutUsersInput)
    create?: Array<ItemCreateWithoutUsersInput>;

    @Field(() => [ItemCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => ItemCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<ItemCreateOrConnectWithoutUsersInput>;

    @Field(() => [ItemWhereUniqueInput], {nullable:true})
    @Type(() => ItemWhereUniqueInput)
    connect?: Array<ItemWhereUniqueInput>;
}
