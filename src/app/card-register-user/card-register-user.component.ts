import { Component } from '@angular/core';
import { ApiService } from '../service/interceptor.service';
import { Router } from '@angular/router';

interface user {
  name: string,
  phoneNumber: number,
  password: string,
  email: string,
  role: string
}

@Component({
  selector: 'app-card-register-user',
  templateUrl: './card-register-user.component.html',
  styleUrl: './card-register-user.component.scss'
})
export class CardRegisterUserComponent {
  formData: user =
    {
      name: "",
      phoneNumber: 0,
      password: "",
      email: "",
      role: "USER"
    }
  data: any
  constructor(private apiAuth: ApiService, private router: Router) { }

  register() {
    this.apiAuth.register(this.formData).subscribe((response) => {
      alert("Criada com sucesso, por favor inicie a sessão!")
      this.router.navigate(['/'])
    },
      (error) => {
        alert("Algo correu mal, tente novamente.")
      }
    )
  }

}
