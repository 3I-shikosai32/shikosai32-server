import { GiftRelationFilter } from '@/infra/prisma/generated/gift/gift-relation-filter/input';
import { BoolFilter } from '@/infra/prisma/generated/prisma/bool-filter/input';
import { DateTimeFilter } from '@/infra/prisma/generated/prisma/date-time-filter/input';
import { SortOrder } from '@/infra/prisma/generated/prisma/sort-order/enum';
import { StringFilter } from '@/infra/prisma/generated/prisma/string-filter/input';
import { UserRelationFilter } from '@/infra/prisma/generated/user/user-relation-filter/input';

export type GiftHistoryWhere = {
  AND?: GiftHistoryWhere[];
  OR?: GiftHistoryWhere[];
  NOT?: GiftHistoryWhere[];
  id?: StringFilter;
  isDelivered?: BoolFilter;
  user?: UserRelationFilter;
  userId?: StringFilter;
  exchangedGift?: GiftRelationFilter;
  giftId?: StringFilter;
  createdAt?: DateTimeFilter;
};

export type GiftHistoryOrderBy = {
  createdAt?: keyof typeof SortOrder;
  deliveredAt?: keyof typeof SortOrder;
};

export type GiftHistoryCursor = {
  id: string;
};
