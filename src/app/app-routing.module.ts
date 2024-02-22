import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardLoginComponent } from './card-login/card-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterCardComponent } from './register-card/register-card.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: CardLoginComponent },
  { path: 'register', component: RegisterCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
