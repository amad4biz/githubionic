import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { HomePage } from '../pages/home/home';
import { UsersPage} from '../pages/users/users';
import {ReposPage} from '../pages/repos/repos';
import { CompaniesPage} from '../pages/companies/companies';
import { UserDetailsPage} from '../pages/user-details/user-details';

import {Data} from '../providers/data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UsersPage,
    CompaniesPage,
    ReposPage,
    UserDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UsersPage,
    CompaniesPage,
    ReposPage,
    UserDetailsPage
  ],
  providers: [Data, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
