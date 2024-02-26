import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.development";
import { Router } from "@angular/router";

interface BodyAuth {
  email: string;
  password: string;
}

interface BodyRegister {
  name: string,
  phoneNumber: number,
  password: string,
  email: string,
  role: string
}

interface BodyGuest {
  "name": string,
  "number": number,
  "gender": string,
  "confirmation": boolean
}


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = environment.apiURL;

  constructor(private http: HttpClient) { }


  login(body: BodyAuth) {
    return this.http.post(`${this.apiUrl}/auth/login`, body)
  }

  register(body: BodyRegister) {
    return this.http.post(`${this.apiUrl}/auth/register`, body)
  }

  fetchData() {
    return this.http.get(`${this.apiUrl}/guests`);
  }

  deleteGuest(id: number) {
    return this.http.delete(`${this.apiUrl}/guests/delete/${id}`)
  }


  createGuest(body: BodyGuest) {
    return this.http.post(`${this.apiUrl}/guests/saveGuest`, body)
  }

  updateGuest(id: number, body: BodyGuest) {
    return this.http.put(`${this.apiUrl}/guests/update/${id}`, body)
  }

  getGuestById(id: number) {
    return this.http.get(`${this.apiUrl}/guests/${id}`)
  }
}

@Injectable(
  {
    providedIn: 'root'
  }
)
export class AuthInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem('token');

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        }
      });
    }
    return next.handle(request);
  }
}

@Injectable(
  {
    providedIn: 'root'
  }
)
export class AuthService {

  constructor(private router: Router) { }

  canActivate(): boolean {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthServiceClear {

  constructor() { }

  clearHeaders(): HttpHeaders {
    return new HttpHeaders();
  }
}
