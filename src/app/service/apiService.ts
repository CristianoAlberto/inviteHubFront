import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private apiUrl = environment.apiURL

    constructor(private http: HttpClient) { }

    fetchData() {
        return this.http.get(`${this.apiUrl}/guests`);
    }

}