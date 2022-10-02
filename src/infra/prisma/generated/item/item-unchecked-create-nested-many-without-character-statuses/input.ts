import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemCreateWithoutCharacterStatusesInput } from '../item-create-without-character-statuses/input';
import { Type } from 'class-transformer';
import { ItemCreateOrConnectWithoutCharacterStatusesInput } from '../item-create-or-connect-without-character-statuses/input';
import { ItemWhereUniqueInput } from '../item-where-unique/input';

@InputType()
export class ItemUncheckedCreateNestedManyWithoutCharacterStatusesInput {

    @Field(() => [ItemCreateWithoutCharacterStatusesInput], {nullable:true})
    @Type(() => ItemCreateWithoutCharacterStatusesInput)
    create?: Array<ItemCreateWithoutCharacterStatusesInput>;

    @Field(() => [ItemCreateOrConnectWithoutCharacterStatusesInput], {nullable:true})
    @Type(() => ItemCreateOrConnectWithoutCharacterStatusesInput)
    connectOrCreate?: Array<ItemCreateOrConnectWithoutCharacterStatusesInput>;

    @Field(() => [ItemWhereUniqueInput], {nullable:true})
    @Type(() => ItemWhereUniqueInput)
    connect?: Array<ItemWhereUniqueInput>;
}
