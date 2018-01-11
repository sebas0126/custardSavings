import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/observable';

// Providers
import { FirestoreProvider } from '../../providers/firestore/firestore';
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  users;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fsSrvc: FirestoreProvider,
    private userSrvc: UserProvider
  ) {

  }

  addUser(){
    
  }

  getUsers() {
    this.users = this.fsSrvc.getUsers(this.userSrvc.currentSaving.id).valueChanges();
  }

  ionViewDidLoad() {
    this.getUsers();
  }

}
