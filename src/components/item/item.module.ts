import { Module } from '@nestjs/common';
import ItemService from './item.service';

@Module({
  providers: [ItemService],
})
export default class ItemModule {}
