import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/interceptor.service';
import { Route, Router } from '@angular/router';

interface guest {
  "name": string,
  "number": number,
  "gender": string,
  "confirmation": boolean
}


@Component({
  selector: 'app-register-card',
  templateUrl: './register-card.component.html',
  styleUrl: './register-card.component.scss'
})
export class RegisterCardComponent {
  formData: guest = {
    "name": "",
    "number": 0,
    "gender": "",
    "confirmation": false
  }
  data: any;
  button: boolean;
  id: number;
  constructor(private api: ApiService, private router: Router,) { this.button = false, this.id = 0 }
  ngOnInit(): void {
    const find = localStorage.getItem("id")
    if (find !== null) {
      this.id = Number(find)
      localStorage.removeItem("id")
      this.api.getGuestById(Number(find)).subscribe((response) => {
        this.data = response
        this.formData = {
          name: this.data.name,
          number: this.data.number,
          gender: this.data.gender,
          confirmation: this.data.confirmation
        }
        this.showButton()
      },
        (error) => {
          console.log(error)
        })
      console.log("Item encontrado:", find);
    } else {
      return
    }
  }

  create() {
    this.api.createGuest(this.formData).subscribe((response) => {
      alert("Cadastrado com sucesso!")
      this.router.navigate(['/table'])
    }, (error) => {
      alert("Algo correu mal!")
    })
  }

  updateGuest() {
    this.api.updateGuest(this.id, this.formData).subscribe((response) => {
      alert("Actulizado com sucesso")
      this.router.navigate(['/table'])
    }, (error) => {
      alert("Algo correu mal!")
      console.log(error)
    })
  }

  showButton() {
    return this.button = true
  }
}
