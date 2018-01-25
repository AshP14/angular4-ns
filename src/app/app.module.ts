import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './header/header.component';
import { LoginService } from './login/login.service';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


import {AgGridModule} from 'ag-grid-angular/main';
import { DataGridComponent } from './data-grid/data-grid.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'accounts', component: AccountsComponent },
    // { path: 'hero/:id',      component: HeroDetailComponent },
    // {
    //     path: 'heroes',
    //     component: HeroListComponent,
    //     data: { title: 'Heroes List' }
    // },
    // { path: '',
    //     redirectTo: '/heroes',
    //     pathMatch: 'full'
    // },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    AccountsComponent,
    PageNotFoundComponent,
    DataGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
      RouterModule.forRoot(
          appRoutes,
          { enableTracing: true } // <-- debugging purposes only
      ),
      AgGridModule.withComponents(
          [AccountsComponent]
      )
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
