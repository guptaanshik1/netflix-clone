export interface IProviderData {
  providerId: string;
  uid: string;
  displayName?: any;
  email: string;
  phoneNumber?: any;
  photoURL?: any;
}

export interface IStsTokenManager {
  refreshToken: string;
  accessToken: string;
  expirationTime: number;
}

export interface IUser {
  uid: string;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  providerData: IProviderData[];
  stsTokenManager: IStsTokenManager;
  createdAt: string;
  lastLoginAt: string;
  apiKey: string;
  appName: string;
}
