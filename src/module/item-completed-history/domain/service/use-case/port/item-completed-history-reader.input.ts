import { CharacterStatusRelationFilter } from '@/infra/prisma/generated/character-status/character-status-relation-filter/input';
import { BoolFilter } from '@/infra/prisma/generated/prisma/bool-filter/input';
import { DateTimeFilter } from '@/infra/prisma/generated/prisma/date-time-filter/input';
import { SortOrder } from '@/infra/prisma/generated/prisma/sort-order/enum';
import { StringFilter } from '@/infra/prisma/generated/prisma/string-filter/input';

export type ItemCompletedHistoryWhere = {
  AND?: ItemCompletedHistoryWhere[];
  OR?: ItemCompletedHistoryWhere[];
  NOT?: ItemCompletedHistoryWhere[];
  id?: StringFilter;
  isDelivered?: BoolFilter;
  characterStatus?: CharacterStatusRelationFilter;
  characterStatusId?: StringFilter;
  createdAt?: DateTimeFilter;
  deliveredAt?: DateTimeFilter;
};

export type ItemCompletedHistoryOrderBy = {
  createdAt?: keyof typeof SortOrder;
  deliveredAt?: keyof typeof SortOrder;
};

export type ItemCompletedHistoryCursor = {
  id: string;
};
