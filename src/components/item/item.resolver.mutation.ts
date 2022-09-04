import { UseGuards } from '@nestjs/common';
import { Resolver } from '@nestjs/graphql';
import ItemService from './item.service';
import AuthGuard from '@/guards/auth.guard';
import FirebaseService from '@/libs/firebase/firebase.service';

@Resolver()
@UseGuards(AuthGuard)
export default class UserMutation {
  constructor(private service: ItemService, private firebaseService: FirebaseService) {}
}