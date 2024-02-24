import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardLoginComponent } from './card-login/card-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterCardComponent } from './register-card/register-card.component';
import { TableComponent } from './table/table.component';
import { CardRegisterUserComponent } from './card-register-user/card-register-user.component';

@NgModule({
  declarations: [
    AppComponent,
    CardLoginComponent,
    DashboardComponent,
    RegisterCardComponent,
    TableComponent,
    CardRegisterUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
