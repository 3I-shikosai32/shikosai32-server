import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GiftHistoryWhereUniqueInput } from '../gift-history-where-unique/input';
import { Type } from 'class-transformer';
import { GiftHistoryUpdateWithoutUserInput } from '../gift-history-update-without-user/input';

@InputType()
export class GiftHistoryUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => GiftHistoryWhereUniqueInput, {nullable:false})
    @Type(() => GiftHistoryWhereUniqueInput)
    where!: GiftHistoryWhereUniqueInput;

    @Field(() => GiftHistoryUpdateWithoutUserInput, {nullable:false})
    @Type(() => GiftHistoryUpdateWithoutUserInput)
    data!: GiftHistoryUpdateWithoutUserInput;
}
