import { Field, InputType } from '@nestjs/graphql';
import { Role } from '@/infra/prisma/generated/prisma/role/enum';

@InputType()
export class UserUpdateInput {
  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => Role, { nullable: true })
  role?: keyof typeof Role;
}
