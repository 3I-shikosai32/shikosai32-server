import { registerEnumType } from '@nestjs/graphql';

// eslint-disable-next-line no-shadow
export enum Date {
  DAY1 = 'DAY1',
  DAY2 = 'DAY2',
}

registerEnumType(Date, { name: 'Date', description: undefined });
