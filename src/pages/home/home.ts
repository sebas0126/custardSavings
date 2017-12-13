import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFirestore } from 'angularfire2/firestore';

import { Observable } from 'rxjs/observable';

import { JsonPipe } from '@angular/common';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public cards = [
    {
      data: {
        name: "Usuarios",
        value: 3
      },
      attributes: [
        {
          name: "Al dia",
          value: 1
        },
        {
          name: "Morosos",
          value: 2
        }
      ]
    },
    {
      data: {
        name: "Ciclo",
        value: 1
      },
      attributes: [
        {
          name: "Proxima cuota",
          value: new Date()
        }
      ]
    },
    {
      data: {
        name: "Eventos",
        value: ""
      },
      attributes: [
        {
          name: "Proximo evento",
          value: new Date()
        },
        {
          name: "Descripcion",
          value: "No hay"
        },
        {
          name: "Valor",
          value: "$300"
        }
      ]
    },
    {
      data: {
        name: "Ahorro",
        value: ""
      },
      attributes: [
        {
          name: "Total",
          value: "$1000"
        },
        {
          name: "Personal",
          value: "$300"
        }
      ]
    }
  ]

  items: Observable<any[]>;

  constructor(
    public navCtrl: NavController,
    public db: AngularFirestore) {


    // this.items = db.collection('users').valueChanges();

  }



}
