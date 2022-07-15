import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApolloConfigInput } from 'apollo-server-types';
import { AppOptions, credential } from 'firebase-admin';
import { FirebaseOptions } from 'firebase/app';

@Injectable()
export default class Env {
  constructor(private configService: ConfigService) {}

  get NodeEnv(): string {
    const nodeEnv = this.configService.get<string>('NODE_ENV', 'production');

    return nodeEnv;
  }

  get Port(): number {
    const port = this.configService.get<number>('PORT', 3000);

    return port;
  }

  get DatabaseURL(): string {
    const databaseURL = this.configService.getOrThrow<string>('DATABASE_URL');

    return databaseURL;
  }

  get ApolloStudioConfig(): ApolloConfigInput {
    return {
      key: this.configService.getOrThrow('APOLLO_KEY'),
      graphId: this.configService.getOrThrow('APOLLO_GRAPH_ID'),
    };
  }

  get FirebaseConfig(): FirebaseOptions {
    return {
      apiKey: this.configService.getOrThrow('FIREBASE_API_KEY'),
      authDomain: this.configService.getOrThrow('FIREBASE_AUTH_DOMAIN'),
      projectId: this.configService.getOrThrow('FIREBASE_PROJECT_ID'),
      storageBucket: this.configService.getOrThrow('FIREBASE_STORAGE_BUCKET'),
      messagingSenderId: this.configService.getOrThrow('FIREBASE_SENDER_ID'),
      appId: this.configService.getOrThrow('FIREBASE_API_ID'),
      measurementId: this.configService.getOrThrow('FIREBASE_MEASUREMENT_ID'),
    };
  }

  get FirebaseAdminConfig(): AppOptions {
    return {
      credential: credential.cert({
        projectId: this.configService.getOrThrow('FIREBASE_ADMIN_PROJECT_ID'),
        privateKey: this.configService.getOrThrow<string>('FIREBASE_ADMIN_PRIVATE_KEY').replace(/\\n/g, '\n'),
        clientEmail: this.configService.getOrThrow('FIREBASE_ADMIN_CLIENT_EMAIL'),
      }),
      storageBucket: this.configService.getOrThrow('FIREBASE_STORAGE_BUCKET'),
    };
  }
}
