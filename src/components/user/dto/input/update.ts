import { InputType, Field } from '@nestjs/graphql';
import { Role } from '@/libs/prisma/generated/prisma/role/enum';

@InputType()
export default class UserUpdateInput {
  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => Role, { nullable: true })
  role?: keyof typeof Role;
}
