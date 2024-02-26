import { Component } from '@angular/core';
import { ApiService } from '../service/interceptor.service';
import { Router } from '@angular/router';

interface BodyAuth {
  email: string;
  password: string;
}
@Component({
  selector: 'app-card-login',
  templateUrl: './card-login.component.html',
  styleUrl: './card-login.component.scss'
})
export class CardLoginComponent {

  formData: BodyAuth = {
    email: '',
    password: ''
  }

  data: any

  constructor(private apiAuth: ApiService, private router: Router) { }

  async login() {
    this.apiAuth.login(this.formData).subscribe((response) => {
      if (response) {
        this.data = response
        localStorage.setItem('token', this.data.token)
        this.router.navigate(['/table']);
      }
    }, (error) => {
      alert("Email/Senha errada!, tente novamente")
    }
    );

  }



}
