import { Injectable, Logger, OnModuleDestroy } from '@nestjs/common';
import {
  App,
  initializeApp as initializeAdminApp,
  getApp as getAdminApp,
  getApps as getAdminApps,
  deleteApp as deleteAdminApp,
} from 'firebase-admin/app';
import { Auth as AdminAuth, getAuth as getAdminAuth } from 'firebase-admin/auth';
import { FirebaseApp, initializeApp, getApp, getApps, deleteApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { EnvService } from '@/config/env/env.service';

@Injectable()
export class FirebaseService implements OnModuleDestroy {
  private readonly logger = new Logger(FirebaseService.name);

  private app: FirebaseApp;

  private adminApp: App;

  auth: Auth;

  adminAuth: AdminAuth;

  constructor(envService: EnvService) {
    this.app = getApps().length ? getApp() : initializeApp(envService.FirebaseConfig);
    this.adminApp = getAdminApps().length ? getAdminApp() : initializeAdminApp(envService.FirebaseAdminConfig);
    this.auth = getAuth(this.app);
    this.adminAuth = getAdminAuth(this.adminApp);

    this.logger.debug(`${FirebaseService.name} constructed`);
  }

  async onModuleDestroy() {
    await Promise.all(getApps().map((firebaseApp) => deleteApp(firebaseApp)));
    await Promise.all(getAdminApps().map((firebaseAdminApp) => deleteAdminApp(firebaseAdminApp)));
  }
}
