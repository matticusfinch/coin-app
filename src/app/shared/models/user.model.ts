import { AccountSettings } from './account-settings.model';

export class User {
  name: string;
  email: string;
  uid: string;
  coinsCollected: number;
  accountSettings: AccountSettings;
}
