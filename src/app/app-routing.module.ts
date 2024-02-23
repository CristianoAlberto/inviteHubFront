import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardLoginComponent } from './card-login/card-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterCardComponent } from './register-card/register-card.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: 'login', component: CardLoginComponent },
  { path: 'register', component: RegisterCardComponent },
  { path: 'table', component: TableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
