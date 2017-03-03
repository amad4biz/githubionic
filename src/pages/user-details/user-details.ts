import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {Data} from '../../providers/data';
import {User} from '../../models/user';

/*
  Generated class for the UserDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html'
})
export class UserDetailsPage {
  user: User;
  login : string;

  constructor( public navCtrl: NavController,
               public navParams: NavParams,
               private git: Data)  { 
                 
                                       this.login = navParams.get('login'); 
                                       this.git.loadDetails(this.login)
                                                            .subscribe(user=>{

                                                                                this.user = user,
                                                                                console.log(this.user)
                                                                               }) 
                                                                              
                                    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetailsPage');
  }



 
}
