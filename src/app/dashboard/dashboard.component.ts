import { Component } from '@angular/core';
import { AuthServiceClear } from '../service/interceptor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private authService: AuthServiceClear, private router: Router) { }

  logout() {
    localStorage.clear()
    this.authService.clearHeaders();
    window.location.reload()
  }
}
