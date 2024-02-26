import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './service/interceptor.service';


import { CardLoginComponent } from './card-login/card-login.component';
import { RegisterCardComponent } from './register-card/register-card.component';
import { TableComponent } from './table/table.component';
import { CardRegisterUserComponent } from './card-register-user/card-register-user.component';

const routes: Routes = [
  { path: '', component: CardLoginComponent },
  { path: 'register', component: RegisterCardComponent, canActivate: [AuthService] },
  { path: 'table', component: TableComponent, canActivate: [AuthService] },
  { path: 'register-user', component: CardRegisterUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
