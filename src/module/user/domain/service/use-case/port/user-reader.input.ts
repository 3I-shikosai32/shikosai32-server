import { GiftHistoryListRelationFilter } from '@/infra/prisma/generated/gift-history/gift-history-list-relation-filter/input';
import { ItemListRelationFilter } from '@/infra/prisma/generated/item/item-list-relation-filter/input';
import { DateTimeFilter } from '@/infra/prisma/generated/prisma/date-time-filter/input';
import { EnumCharacterFilter } from '@/infra/prisma/generated/prisma/enum-character-filter/input';
import { EnumGameFilter } from '@/infra/prisma/generated/prisma/enum-game-filter/input';
import { EnumRoleFilter } from '@/infra/prisma/generated/prisma/enum-role-filter/input';
import { IntFilter } from '@/infra/prisma/generated/prisma/int-filter/input';
import { SortOrder } from '@/infra/prisma/generated/prisma/sort-order/enum';
import { StringFilter } from '@/infra/prisma/generated/prisma/string-filter/input';
import { StringNullableListFilter } from '@/infra/prisma/generated/prisma/string-nullable-list-filter/input';

export type UserWhere = {
  AND?: UserWhere[];
  OR?: UserWhere[];
  NOT?: UserWhere[];
  id?: StringFilter;
  name?: StringFilter;
  email?: StringFilter;
  role?: EnumRoleFilter;
  totalPointDay1?: IntFilter;
  totalPointDay2?: IntFilter;
  consumablePoint?: IntFilter;
  character?: EnumCharacterFilter;
  iconUrl?: StringFilter;
  avatarUrl?: StringFilter;
  items?: ItemListRelationFilter;
  itemIds?: StringNullableListFilter;
  participateGame?: EnumGameFilter;
  pullableGachaTimes?: IntFilter;
  giftHistories?: GiftHistoryListRelationFilter;
  createdAt?: DateTimeFilter;
};

export type UserOrderBy = {
  name?: keyof typeof SortOrder;
  totalPointDay1?: keyof typeof SortOrder;
  totalPointDay2?: keyof typeof SortOrder;
  createdAt?: keyof typeof SortOrder;
};

export type UserCursor = {
  id: string;
};
