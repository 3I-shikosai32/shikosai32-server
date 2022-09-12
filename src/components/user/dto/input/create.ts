import { InputType, Field } from '@nestjs/graphql';
import { Character } from '@/libs/prisma/generated/prisma/character/enum';
import { Role } from '@/libs/prisma/generated/prisma/role/enum';

@InputType()
export default class UserCreateInput {
  @Field(() => String, { nullable: false })
  id: string;

  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: false })
  email: string;

  @Field(() => Role, { nullable: true, defaultValue: Role.USER })
  role: keyof typeof Role;

  @Field(() => Character, { nullable: false })
  character: keyof typeof Character;

  @Field(() => String, { nullable: false })
  iconUrl: string;

  @Field(() => String, { nullable: false })
  avatarUrl: string;
}
