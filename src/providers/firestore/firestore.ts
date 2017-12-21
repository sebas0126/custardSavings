import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Strings } from '../../classes/strings';

import { Observable } from 'rxjs/observable';

@Injectable()
export class FirestoreProvider {

  userCollection: AngularFirestoreCollection<any>;
  users: Observable<{}[]>

  constructor(
    public db: AngularFirestore
  ) {

  }

  addMoney(userId: string, savingId: string, data: {}){
    return this.db.doc(Strings.FIRESTORE_DATABASE.COL_SAVINGS + `/${savingId}/` + Strings.FIRESTORE_DATABASE.COL_USERS + `/${userId}/`)
    .collection(Strings.FIRESTORE_DATABASE.COL_RECORDS).add(data);
  }

  getUsers() {
    this.userCollection = this.db.collection('users');
    this.users = this.userCollection.valueChanges();
    this.users.subscribe(obs => {
      console.log(obs);
    })
    return this.users;
  }

  createUser(user: {}, id: string) {
    this.userCollection = this.db.collection('users');
    this.userCollection.doc(id).set(user)
      .then(res => {
        return res;
      }).catch(err => {
        return err;
      })
  }

  addUserToSaving(userId: string, savingId: string){
    return this.db.doc(Strings.FIRESTORE_DATABASE.COL_SAVINGS + `/${savingId}/` + Strings.FIRESTORE_DATABASE.COL_USERS + `/${userId}`)
    .set({record: [], total: 0}, {merge: true});
  }

  getUser(id: string): Observable<any> {
    var user: Observable<any> = this.db.collection('users').doc(id).valueChanges();
    user.subscribe(res => {
      console.log(res);
    })
    return user;
  }

}
