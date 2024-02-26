import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/interceptor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(private service: ApiService, private router: Router) { }

  data: any;

  ngOnInit(): void {
    this.service.fetchData().subscribe((response) => {
      this.data = response;
    });
  }

  deleteGuest(id: number) {
    this.service.deleteGuest(id).subscribe((response) => {
      alert("Eliminado com sucesso")
      window.location.reload()
    }, (error) => {
      alert("Algo correu mal, por favor tente novamente")
    })
  }

  update(id: string) {
    localStorage.setItem("id", id)
    this.router.navigate(['/register'])
  }

}
