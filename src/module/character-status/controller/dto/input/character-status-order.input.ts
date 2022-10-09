import { Field, InputType } from '@nestjs/graphql';
import { ItemCompletedHistoryOrderInput } from './item-completed-history-order.input';

@InputType()
export class CharacterStatusOrderInput {
  @Field(() => ItemCompletedHistoryOrderInput, { nullable: true })
  itemCompletedHistory?: ItemCompletedHistoryOrderInput;
}
