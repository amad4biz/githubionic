import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {Observable} from 'rxjs/Rx';
import {User} from '../models/user';

/*
  Generated class for the Data provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Data {

   gitHubUrl = "https://api.github.com";

  constructor(public http: Http) {
    console.log('Hello Data Provider');
  }

        

   load(): Observable<User[]>{

       return this.http.get(`${this.gitHubUrl}/users`).map(res => <User[]>res.json() );

   }




   loadDetails(login : string): Observable<User>{


     return this.http.get(`${this.gitHubUrl}/users/${login}`)
                                     
                                     .map(res => <User> res.json())

   }


  //searching a users

   searchUsers(searchParam: string): Observable<User[]> {

       return this.http.get(`${this.gitHubUrl}/search/users?q=${searchParam}`)
                                        .map(res=><User[]> (res.json().items))

   }

}
