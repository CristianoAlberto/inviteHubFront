import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardLoginComponent } from './card-login/card-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterCardComponent } from './register-card/register-card.component';
import { TableComponent } from './table/table.component';
import { CardRegisterUserComponent } from './card-register-user/card-register-user.component';
import { ApiService, AuthInterceptor, AuthService } from './service/interceptor.service';
import { FormsModule } from '@angular/forms';

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
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService, AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
