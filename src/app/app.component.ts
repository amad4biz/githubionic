import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import {UsersPage} from '../pages/users/users';
import {ReposPage} from '../pages/repos/repos';
import { CompaniesPage} from '../pages/companies/companies';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage:any = UsersPage;

  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, public menuCtrl : MenuController) {



    this.pages =[{title: 'Users', component: UsersPage},
                 {title: 'Repos', component: ReposPage},
                 {title:  'Companies', component: CompaniesPage},
                  {title:  'Home', component: HomePage},
                 
    
    ];


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
     Splashscreen.hide();
    });
  }


  openPage(page){

    this.menuCtrl.close();

    this.nav.setRoot(page.component);
  }
}
