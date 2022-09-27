import { Role } from '@prisma/client';

export type UpdateUserData = {
  name?: string;
  role?: keyof typeof Role;
};

export type IncrementPointData = {
  id: string;
  increment: number;
};
