import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import { Observable } from 'rxjs/observable';

@Injectable()
export class FirestoreProvider {

  userCollection: AngularFirestoreCollection<any>;
  users: Observable<{}[]>

  constructor(
    public db: AngularFirestore
  ) {

  }

  // addSaving(){
  //   this.db.
  // }

  getUsers() {
    if (!this.users) {
      this.userCollection = this.db.collection('users');
      this.users = this.userCollection.valueChanges();
    }
    return this.users;
  }

  addUser(user: {}, id: "") {
    this.userCollection.doc(id).set(user)
      .then(res => {
        return res;
      }).catch(err => {
        return err;
      })
  }

  getUser(id: ""){
    return this.userCollection.doc(id);
  }

}
