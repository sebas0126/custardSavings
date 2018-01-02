import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Observable } from 'rxjs/observable';

import { FirestoreProvider } from '../../providers/firestore/firestore';

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

  constructor(
    public navCtrl: NavController,
    fsSrvc: FirestoreProvider
  ) {
    // fsSrvc.addUserToSaving("222222", "TyIqwSkeisGLb2jLBfCl")
    //   .then(res => {
    //     console.log(res);
    //   }).catch(err => {
    //     console.log(err);
    //   })
    // fsSrvc.addMoney("222222", "TyIqwSkeisGLb2jLBfCl", {money: 2000, date: new Date });
  }



}
