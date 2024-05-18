import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://your-api-url/login'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const credentials = { user: username, pwd: password };
    return this.http.post(this.apiUrl, credentials, { withCredentials: true, observe: 'response' });
  }

  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`, {}, { withCredentials: true, observe: 'response' });
  }

  refreshToken(): Observable<any> {
    return this.http.get(`${this.apiUrl}/refresh`, { withCredentials: true, observe: 'response' });
  }

  registerUser(username: string, password: string): Observable<any> {
    const newUser = { user: username, pwd: password };
    return this.http.post(`${this.apiUrl}/register`, newUser, { observe: 'response' });
  }
}
