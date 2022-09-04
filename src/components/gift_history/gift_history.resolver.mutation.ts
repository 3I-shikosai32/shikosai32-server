import { UseGuards } from '@nestjs/common';
import { Resolver } from '@nestjs/graphql';
import GiftHistoryService from './gift_history.service';
import AuthGuard from '@/guards/auth.guard';
import FirebaseService from '@/libs/firebase/firebase.service';

@Resolver()
@UseGuards(AuthGuard)
export default class GiftHistoryMutation {
  constructor(private service: GiftHistoryService, private firebaseService: FirebaseService) {}
}
