import { Field, InputType } from '@nestjs/graphql';
import { Character } from '@/infra/prisma/generated/prisma/character/enum';
import { Role } from '@/infra/prisma/generated/prisma/role/enum';

@InputType()
export class UserCreateInput {
  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: false })
  email: string;

  @Field(() => Role, { nullable: true, defaultValue: Role.USER })
  role: keyof typeof Role;

  @Field(() => String, { nullable: false })
  authId: string;

  @Field(() => Character, { nullable: false })
  character: keyof typeof Character;
}
