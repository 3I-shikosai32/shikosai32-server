import { StrictPropertyCheck } from '@/common/type/strict-property-check.type';

export interface BaseRepositoryInterface<M, FindUniqueArgs, FindManyArgs, CreateArgs, UpdateArgs, DeleteArgs> {
  findUnique<T extends FindUniqueArgs>(args: StrictPropertyCheck<T, FindUniqueArgs>): Promise<M | null>;
  findMany<T extends FindManyArgs>(args: StrictPropertyCheck<T, FindManyArgs>): Promise<M[]>;
  create<T extends CreateArgs>(args: StrictPropertyCheck<T, CreateArgs>): Promise<M>;
  update<T extends UpdateArgs>(args: StrictPropertyCheck<T, UpdateArgs>): Promise<M>;
  delete<T extends DeleteArgs>(args: StrictPropertyCheck<T, DeleteArgs>): Promise<M>;
}
