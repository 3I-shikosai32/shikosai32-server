import { Module } from '@nestjs/common';
import ItemMutation from './item.resolver.mutation';
import ItemQury from './item.resolver.query';
import ItemSubscription from './item.resolver.subscription';
import ItemService from './item.service';

@Module({
  providers: [ItemService, ItemQury, ItemSubscription, ItemMutation],
})
export default class ItemModule {}
