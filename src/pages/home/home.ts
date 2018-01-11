import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { Observable } from 'rxjs/observable';

//Providers
import { FirestoreProvider } from '../../providers/firestore/firestore';
import { UserProvider } from '../../providers/user/user';

//Components
import { PopMenuPage } from '../../pages/pop-menu/pop-menu';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  currentUser;
  currentSaving;

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
    private fsSrvc: FirestoreProvider,
    private popCtrl: PopoverController,
    private userSrvc: UserProvider
  ) {
    this.currentUser = this.userSrvc.userData;
    this.currentSaving = this.currentUser.savings[0];
    this.userSrvc.currentSaving = this.currentSaving;
    // fsSrvc.addUserToSaving("222222", "TyIqwSkeisGLb2jLBfCl")
    //   .then(res => {
    //     console.log(res);
    //   }).catch(err => {
    //     console.log(err);
    //   })
    // fsSrvc.addMoney("222222", "TyIqwSkeisGLb2jLBfCl", {money: 2000, date: new Date });
  }

  showSavings(e){
    let pop = this.popCtrl.create(PopMenuPage, {userSavings: this.userSrvc.userData.savings});
    pop.present({
      ev: e
    });
  }

}
