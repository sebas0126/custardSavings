import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UsersPage } from '../pages/users/users';
import { RecordPage } from '../pages/record/record';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { FirestoreProvider } from '../providers/firestore/firestore';
import { UserProvider } from '../providers/user/user';
import { IonicStorageModule } from '@ionic/storage';
import { PopMenuPageModule } from '../pages/pop-menu/pop-menu.module'
import { PopMenuPage } from '../pages/pop-menu/pop-menu';

export const config = {
  apiKey: "AIzaSyCrSne2RBg5XmFbAuZ0dtUtKtvtiN6wWTg",
  authDomain: "custard-savings.firebaseapp.com",
  databaseURL: "https://custard-savings.firebaseio.com",
  projectId: "custard-savings",
  storageBucket: "custard-savings.appspot.com",
  messagingSenderId: "39423382020"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UsersPage,
    RecordPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    IonicStorageModule.forRoot(),
    PopMenuPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UsersPage,
    RecordPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirestoreProvider,
    UserProvider
  ]
})
export class AppModule {}
