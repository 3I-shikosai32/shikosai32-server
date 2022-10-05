import { Field, ObjectType } from '@nestjs/graphql';
import { CharacterStatus } from '~/character-status/controller/dto/object/character-status.object';

@ObjectType()
export class ItemCompletedHistory {
  @Field(() => String, { nullable: false })
  id: string;

  @Field(() => Boolean, { nullable: false })
  isDelivered: boolean;

  @Field(() => CharacterStatus, { nullable: false })
  characterStatus: CharacterStatus;

  @Field(() => String, { nullable: false })
  characterStatusId: string;

  @Field(() => String, { nullable: false })
  itemId: string;

  @Field(() => Date, { nullable: false })
  createdAt: Date;

  @Field(() => Date, { nullable: true })
  deliveredAt: Date | null;
}
