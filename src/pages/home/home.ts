import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/users';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public list: any = [];

  constructor(
    public navCtrl: NavController,
    public users: UsersProvider
  ) {
    this.loadList();
  }

  loadList() {
    return new Promise(resolve => {
      this.users.getListUser().then(results => {
        console.log(results);
        this.list = results;
        
        return resolve();
      }).catch(err => {        
        console.log(err);

        return resolve();
      });
    })
  }

  doRefresh(refresher) {
    this.loadList().then(() => refresher.complete());
  }

  

}
