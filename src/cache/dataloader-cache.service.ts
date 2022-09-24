import { Injectable } from '@nestjs/common';
import DataLoader from 'dataloader';

@Injectable()
// eslint-disable-next-line no-use-before-define
export class DataLoaderCacheService<T extends { id: K }, K, C = K> {
  prime(dataLoader: DataLoader<K, T, C>, obj: T) {
    dataLoader.prime(obj.id, obj);
  }

  primeMany(dataLoader: DataLoader<K, T, C>, objs: T[]) {
    objs.forEach((obj) => {
      dataLoader.prime(obj.id, obj);
    });
  }
}
