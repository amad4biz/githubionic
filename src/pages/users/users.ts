import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { User} from '../../models/user';

import {Data} from '../../providers/data';

import {UserDetailsPage} from '../user-details/user-details';

/*
  Generated class for the Users page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {

  users: User[];
  originalUsers : User[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private git : Data) {  
                
                                this.git.load()
                                              .subscribe(users => { 
                                                                     this.users = users;
                                                                     this.originalUsers = users;
                                                                      console.log(users)}
                                                                                                      
                                                                                  )
                                                                                                    
                                                                    }

  
  //search user 

  search(searchEvent){

   let term = searchEvent.target.value;

   // check if term is more than 3 character

      if(term.trim()=== '' || term.trim().length < 3){
         

         // load cached users

        this.users = this.originalUsers;
      }else{

        this.git.searchUsers(term).subscribe(users =>{

          this.users = users
        });
      }


  }
  

  // go to the user details
   gotoDetails(login: string){


     this.navCtrl.push(UserDetailsPage, {login});

     


   }

  
}
