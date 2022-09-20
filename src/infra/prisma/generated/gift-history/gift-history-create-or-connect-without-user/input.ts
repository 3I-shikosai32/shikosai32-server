import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GiftHistoryWhereUniqueInput } from '../gift-history-where-unique/input';
import { Type } from 'class-transformer';
import { GiftHistoryCreateWithoutUserInput } from '../gift-history-create-without-user/input';

@InputType()
export class GiftHistoryCreateOrConnectWithoutUserInput {

    @Field(() => GiftHistoryWhereUniqueInput, {nullable:false})
    @Type(() => GiftHistoryWhereUniqueInput)
    where!: GiftHistoryWhereUniqueInput;

    @Field(() => GiftHistoryCreateWithoutUserInput, {nullable:false})
    @Type(() => GiftHistoryCreateWithoutUserInput)
    create!: GiftHistoryCreateWithoutUserInput;
}
