import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/apiService';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  constructor(private service: ApiService) { }

  data: any;

  ngOnInit(): void {
    this.data = this.service.fetchData();
    console.log(this.data)
  }

}
