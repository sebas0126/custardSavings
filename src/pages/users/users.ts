import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  public users = [
    {
      name: "Miguel Angel",
      image: "",
      data: [
        {
          name: "Dinero",
          value: "$300"
        },
        {
          name: "Eventos",
          value: 2
        }
      ]
    },
    {
      name: "Donatello",
      image: "",
      data: [
        {
          name: "Dinero",
          value: "$400"
        },
        {
          name: "Eventos",
          value: 3
        }
      ]
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

}
