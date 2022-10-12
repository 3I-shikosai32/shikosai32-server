import { Role } from '@prisma/client';

export type UpdateUserBioData = {
  name?: string;
  role?: keyof typeof Role;
};
