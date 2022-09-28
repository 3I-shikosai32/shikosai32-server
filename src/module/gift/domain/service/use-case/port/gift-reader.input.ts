import { GiftHistoryListRelationFilter } from '@/infra/prisma/generated/gift-history/gift-history-list-relation-filter/input';
import { DateTimeFilter } from '@/infra/prisma/generated/prisma/date-time-filter/input';
import { IntFilter } from '@/infra/prisma/generated/prisma/int-filter/input';
import { SortOrder } from '@/infra/prisma/generated/prisma/sort-order/enum';
import { StringFilter } from '@/infra/prisma/generated/prisma/string-filter/input';

export type GiftWhere = {
  AND?: GiftWhere[];
  OR?: GiftWhere[];
  NOT?: GiftWhere[];
  id?: StringFilter;
  name?: StringFilter;
  iconUrl?: StringFilter;
  price?: IntFilter;
  remaining?: IntFilter;
  giftHistories?: GiftHistoryListRelationFilter;
  createdAt?: DateTimeFilter;
};

export type GiftOrderBy = {
  name?: keyof typeof SortOrder;
  price?: keyof typeof SortOrder;
  remaining?: keyof typeof SortOrder;
  createdAt?: keyof typeof SortOrder;
};

export type GiftCursor = {
  id: string;
};
