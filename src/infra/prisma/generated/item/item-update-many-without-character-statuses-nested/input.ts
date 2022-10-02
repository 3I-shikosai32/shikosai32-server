import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemCreateWithoutCharacterStatusesInput } from '../item-create-without-character-statuses/input';
import { Type } from 'class-transformer';
import { ItemCreateOrConnectWithoutCharacterStatusesInput } from '../item-create-or-connect-without-character-statuses/input';
import { ItemUpsertWithWhereUniqueWithoutCharacterStatusesInput } from '../item-upsert-with-where-unique-without-character-statuses/input';
import { ItemWhereUniqueInput } from '../item-where-unique/input';
import { ItemUpdateWithWhereUniqueWithoutCharacterStatusesInput } from '../item-update-with-where-unique-without-character-statuses/input';
import { ItemUpdateManyWithWhereWithoutCharacterStatusesInput } from '../item-update-many-with-where-without-character-statuses/input';
import { ItemScalarWhereInput } from '../item-scalar-where/input';

@InputType()
export class ItemUpdateManyWithoutCharacterStatusesNestedInput {

    @Field(() => [ItemCreateWithoutCharacterStatusesInput], {nullable:true})
    @Type(() => ItemCreateWithoutCharacterStatusesInput)
    create?: Array<ItemCreateWithoutCharacterStatusesInput>;

    @Field(() => [ItemCreateOrConnectWithoutCharacterStatusesInput], {nullable:true})
    @Type(() => ItemCreateOrConnectWithoutCharacterStatusesInput)
    connectOrCreate?: Array<ItemCreateOrConnectWithoutCharacterStatusesInput>;

    @Field(() => [ItemUpsertWithWhereUniqueWithoutCharacterStatusesInput], {nullable:true})
    @Type(() => ItemUpsertWithWhereUniqueWithoutCharacterStatusesInput)
    upsert?: Array<ItemUpsertWithWhereUniqueWithoutCharacterStatusesInput>;

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

    @Field(() => [ItemUpdateWithWhereUniqueWithoutCharacterStatusesInput], {nullable:true})
    @Type(() => ItemUpdateWithWhereUniqueWithoutCharacterStatusesInput)
    update?: Array<ItemUpdateWithWhereUniqueWithoutCharacterStatusesInput>;

    @Field(() => [ItemUpdateManyWithWhereWithoutCharacterStatusesInput], {nullable:true})
    @Type(() => ItemUpdateManyWithWhereWithoutCharacterStatusesInput)
    updateMany?: Array<ItemUpdateManyWithWhereWithoutCharacterStatusesInput>;

    @Field(() => [ItemScalarWhereInput], {nullable:true})
    @Type(() => ItemScalarWhereInput)
    deleteMany?: Array<ItemScalarWhereInput>;
}
