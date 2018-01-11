import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Strings } from '../../classes/strings';

import { Observable } from 'rxjs/observable';

@Injectable()
export class FirestoreProvider {

  constructor(
    public db: AngularFirestore
  ) {

  }

  addMoney(userId: string, savingId: string, data: {}) {
    return this.db.doc(Strings.FIRESTORE_DATABASE.COL_SAVINGS + `/${savingId}/` + Strings.FIRESTORE_DATABASE.COL_USERS + `/${userId}/`)
      .collection(Strings.FIRESTORE_DATABASE.COL_RECORDS).add(data);
  }

  getUsers(savingId) {
    var users = this.db.collection(Strings.FIRESTORE_DATABASE.COL_SAVINGS + `/${savingId}/` + Strings.FIRESTORE_DATABASE.COL_USERS);
    return users;
  }

  // createUser(user: {}, id: string) {
  //   this.userCollection = this.db.collection('users');
  //   this.userCollection.doc(id).set(user)
  //     .then(res => {
  //       return res;
  //     }).catch(err => {
  //       return err;
  //     })
  // }

  addUserToSaving(userId: string, savingId: string) {
    return this.db.doc(Strings.FIRESTORE_DATABASE.COL_SAVINGS + `/${savingId}/` + Strings.FIRESTORE_DATABASE.COL_USERS + `/${userId}`)
      .set({ record: [], total: 0 }, { merge: true });
  }

  getUser(id: string): Observable<any> {
    var user: Observable<any> = this.db.collection('users').doc(id).valueChanges();
    return user;
  }

  setPassword(id: string, pass: string) {
    return this.db.doc(Strings.FIRESTORE_DATABASE.COL_USERS + `/${id}`)
      .set({ pass: pass, active: true }, { merge: true });
  }

}
