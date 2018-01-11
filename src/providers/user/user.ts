import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Strings } from '../../classes/strings';

@Injectable()
export class UserProvider {

  userData: any;
  currentSaving: any;

  constructor(
    private storage: Storage
  ) {
  }

  storeCredentials(data): Promise<any>{
    return this.storage.set(Strings.STORAGE.CREDENTIALS, data);
  }

  getStoredCredentials(): Promise<any>{
    return this.storage.get(Strings.STORAGE.CREDENTIALS);
  }

}
