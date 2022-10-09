import { ItemListRelationFilter } from '@/infra/prisma/generated/item/item-list-relation-filter/input';
import { EnumCharacterFilter } from '@/infra/prisma/generated/prisma/enum-character-filter/input';
import { IntFilter } from '@/infra/prisma/generated/prisma/int-filter/input';
import { ItemCompletedHistoryNullableCompositeFilter } from '@/infra/prisma/generated/prisma/item-completed-history-nullable-composite-filter/input';
import { SortOrder } from '@/infra/prisma/generated/prisma/sort-order/enum';
import { StringFilter } from '@/infra/prisma/generated/prisma/string-filter/input';
import { StringNullableListFilter } from '@/infra/prisma/generated/prisma/string-nullable-list-filter/input';
import { UserRelationFilter } from '@/infra/prisma/generated/user/user-relation-filter/input';

export type CharacterStatusWhere = {
  AND?: CharacterStatusWhere[];
  OR?: CharacterStatusWhere[];
  NOT?: CharacterStatusWhere[];
  id?: StringFilter;
  character?: EnumCharacterFilter;
  iconUrl?: StringFilter;
  avatarUrl?: StringFilter;
  characterPointDay1?: IntFilter;
  characterPointDay2?: IntFilter;
  user?: UserRelationFilter;
  userId?: StringFilter;
  items?: ItemListRelationFilter;
  itemIds?: StringNullableListFilter;
  itemCompletedHistory?: ItemCompletedHistoryNullableCompositeFilter;
};

export type CharacterStatusOrderBy = {
  itemCompletedHistory?: {
    createdAt?: keyof typeof SortOrder;
    deliveredAt?: keyof typeof SortOrder;
  };
};

export type CharacterStatusCursor = {
  id: string;
};
