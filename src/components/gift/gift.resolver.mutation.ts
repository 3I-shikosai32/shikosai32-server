import { UseGuards } from '@nestjs/common';
import { Resolver } from '@nestjs/graphql';
import GiftService from './gift.service';
import AuthGuard from '@/guards/auth.guard';
import FirebaseService from '@/libs/firebase/firebase.service';

@Resolver()
@UseGuards(AuthGuard)
export default class GiftMutation {
  constructor(private service: GiftService, private firebaseService: FirebaseService) {}
}
