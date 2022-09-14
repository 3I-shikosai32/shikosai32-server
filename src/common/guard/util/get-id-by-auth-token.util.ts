import { FirebaseService } from '@/infra/firebase/firebase.service';

export const getIdByAuthToken = async (firebaseService: FirebaseService, authorization: string | undefined) => {
  if (!authorization) {
    return null;
  }

  const decodedToken = await firebaseService.adminAuth.verifyIdToken(authorization);

  return decodedToken.uid;
};
