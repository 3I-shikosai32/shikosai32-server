import { Injectable, OnModuleDestroy } from '@nestjs/common';
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
import Env from '../../config/environment/getter/getter.service';

@Injectable()
export default class FirebaseService implements OnModuleDestroy {
  private app: FirebaseApp;

  private adminApp: App;

  auth: Auth;

  adminAuth: AdminAuth;

  constructor(private env: Env) {
    this.app = getApps().length ? getApp() : initializeApp(env.FirebaseConfig);
    this.adminApp = getAdminApps().length ? getAdminApp() : initializeAdminApp(env.FirebaseAdminConfig);
    this.auth = getAuth(this.app);
    this.adminAuth = getAdminAuth(this.adminApp);
  }

  async onModuleDestroy() {
    await Promise.all(getApps().map((firebaseApp) => deleteApp(firebaseApp)));
    await Promise.all(getAdminApps().map((firebaseAdminApp) => deleteAdminApp(firebaseAdminApp)));
  }
}
