import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pop-menu',
  templateUrl: 'pop-menu.html',
})
export class PopMenuPage {

  savings;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.savings = navParams.data.userSavings;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopMenuPage');
  }

}
