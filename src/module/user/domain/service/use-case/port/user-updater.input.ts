import { Role } from '@prisma/client';

export type UpdateUserData = {
  name?: string;
  role?: keyof typeof Role;
};
