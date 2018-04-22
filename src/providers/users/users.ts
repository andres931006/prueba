import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {

  constructor(public http: Http) {
    console.log('Hello UsersProvider Provider');
  }

  public getListUser() {
    return new Promise((resolve, reject) => {
      this.http.get('http://jsonplaceholder.typicode.com/users').map(res => res.json())
        .subscribe((data: any = []) => {

          resolve(data);
        });
    })
  }

      
}
