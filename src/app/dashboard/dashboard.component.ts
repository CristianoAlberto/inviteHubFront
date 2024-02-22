import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/apiService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  data: any;
  teste: any;
  constructor(private apiService: ApiService) { }
  ngOnInit(): void {
    this.apiService.fetchData().subscribe((response) => {

      this.data = response
      this.teste = this.data.data.data
      console.log(this.teste)
    })
  }
}
