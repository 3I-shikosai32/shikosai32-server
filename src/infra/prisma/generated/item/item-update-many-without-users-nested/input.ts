import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemCreateWithoutUsersInput } from '../item-create-without-users/input';
import { Type } from 'class-transformer';
import { ItemCreateOrConnectWithoutUsersInput } from '../item-create-or-connect-without-users/input';
import { ItemUpsertWithWhereUniqueWithoutUsersInput } from '../item-upsert-with-where-unique-without-users/input';
import { ItemWhereUniqueInput } from '../item-where-unique/input';
import { ItemUpdateWithWhereUniqueWithoutUsersInput } from '../item-update-with-where-unique-without-users/input';
import { ItemUpdateManyWithWhereWithoutUsersInput } from '../item-update-many-with-where-without-users/input';
import { ItemScalarWhereInput } from '../item-scalar-where/input';

@InputType()
export class ItemUpdateManyWithoutUsersNestedInput {

    @Field(() => [ItemCreateWithoutUsersInput], {nullable:true})
    @Type(() => ItemCreateWithoutUsersInput)
    create?: Array<ItemCreateWithoutUsersInput>;

    @Field(() => [ItemCreateOrConnectWithoutUsersInput], {nullable:true})
    @Type(() => ItemCreateOrConnectWithoutUsersInput)
    connectOrCreate?: Array<ItemCreateOrConnectWithoutUsersInput>;

    @Field(() => [ItemUpsertWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => ItemUpsertWithWhereUniqueWithoutUsersInput)
    upsert?: Array<ItemUpsertWithWhereUniqueWithoutUsersInput>;

    @Field(() => [ItemWhereUniqueInput], {nullable:true})
    @Type(() => ItemWhereUniqueInput)
    set?: Array<ItemWhereUniqueInput>;

    @Field(() => [ItemWhereUniqueInput], {nullable:true})
    @Type(() => ItemWhereUniqueInput)
    disconnect?: Array<ItemWhereUniqueInput>;

    @Field(() => [ItemWhereUniqueInput], {nullable:true})
    @Type(() => ItemWhereUniqueInput)
    delete?: Array<ItemWhereUniqueInput>;

    @Field(() => [ItemWhereUniqueInput], {nullable:true})
    @Type(() => ItemWhereUniqueInput)
    connect?: Array<ItemWhereUniqueInput>;

    @Field(() => [ItemUpdateWithWhereUniqueWithoutUsersInput], {nullable:true})
    @Type(() => ItemUpdateWithWhereUniqueWithoutUsersInput)
    update?: Array<ItemUpdateWithWhereUniqueWithoutUsersInput>;

    @Field(() => [ItemUpdateManyWithWhereWithoutUsersInput], {nullable:true})
    @Type(() => ItemUpdateManyWithWhereWithoutUsersInput)
    updateMany?: Array<ItemUpdateManyWithWhereWithoutUsersInput>;

    @Field(() => [ItemScalarWhereInput], {nullable:true})
    @Type(() => ItemScalarWhereInput)
    deleteMany?: Array<ItemScalarWhereInput>;
}
