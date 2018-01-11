import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { NgModel } from '@angular/forms';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/observable';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

//Providers
import { FirestoreProvider } from '../../providers/firestore/firestore';
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit {

  userCredentials: any;

  currentUser: any;

  private searchTerms = new Subject<string>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public fsSrvc: FirestoreProvider,
    public userSrvc: UserProvider
  ) {
    this.userCredentials = {
      id: "",
      pass: "",
      repass: ""
    }
  }

  login() {
    let b64 = btoa(this.userCredentials.pass)
    if (b64 === this.currentUser.pass) {
      this.userSrvc.userData = this.currentUser;
      this.userSrvc.storeCredentials(this.userCredentials);
      this.navCtrl.setRoot(HomePage);
    }
  }

  register() {
    let b64 = btoa(this.userCredentials.pass);
    this.fsSrvc.setPassword(this.userCredentials.id, b64)
      .then(res => {
        console.log(res);
      })
  }

  getUserData(e) {
    if (!e.target.value) return;
    this.searchTerms.next(e.target.value);
  }

  findUser(id){
    this.searchTerms.next(id);
  }

  ngOnInit() {
    this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.fsSrvc.getUser(term))
    ).subscribe(data => {
      this.currentUser = data;
    })
  }

  matchPassword() {
    return this.userCredentials.pass === this.userCredentials.repass;
  }

  ionViewDidLoad() {
    this.userSrvc.getStoredCredentials()
    .then(data => {
      if(data){
        this.userCredentials = data;
        this.fsSrvc.getUser("" + data.id)
        .subscribe(data => {
          this.currentUser = data;
          this.login();
        })
      }
    }).catch(err => {
      console.log(err);
    });
  }

}
