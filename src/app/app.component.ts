import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { UsersPage } from '../pages/users/users';
import { RecordPage } from '../pages/record/record';
import { LoginPage } from '../pages/login/login';

import { FirestoreProvider } from '../providers/firestore/firestore';
import { UserProvider } from '../providers/user/user';

@Component({
  templateUrl: 'app.html',
  providers: [
    FirestoreProvider,
    UserProvider
  ]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Pizarra', component: HomePage },
      { title: 'Usuarios', component: UsersPage },
      { title: 'Historial', component: RecordPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
