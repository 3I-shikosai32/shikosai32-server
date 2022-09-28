import { Character, Role } from '@prisma/client';

export type CreateUserData = {
  id: string;
  name: string;
  email: string;
  role: keyof typeof Role;
  character: keyof typeof Character;
};
