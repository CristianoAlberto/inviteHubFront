import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private apiUrl = 'http://localhost '

    constructor(private http: HttpClient) { }

    fetchData() {
        return this.http.get('https://provision-07c1.onrender.com/api/v1/user');
    }

}