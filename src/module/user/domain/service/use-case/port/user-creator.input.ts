import { Character, Role } from '@prisma/client';

export type CreateUserData = {
  name: string;
  email: string;
  role: keyof typeof Role;
  authId: string;
  character: keyof typeof Character;
};
