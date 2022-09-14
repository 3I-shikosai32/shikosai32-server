import { Injectable } from '@nestjs/common';
import { NestedGiftInterface } from '../service/model/nested-gift.model';

@Injectable()
export class NestedGift implements NestedGiftInterface {
  id: string;

  name: string;

  iconUrl: string;

  price: number;

  remaining: number;

  createdAt: Date;
}
