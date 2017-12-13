import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-record',
  templateUrl: 'record.html',
})
export class RecordPage {

  public pays = [
    {
      loop: 1,
      money: "$300",
      date: new Date()
    },
    {
      loop: 2,
      money: "$500",
      date: new Date()
    },
    {
      loop: 3,
      money: "$600",
      date: new Date()
    },
    {
      loop: 4,
      money: "$800",
      date: new Date()
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecordPage');
  }

}
