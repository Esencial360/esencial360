import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(userData: any): Observable<any> {
    return this.http.post('/api/users', userData)
      .pipe(
        catchError(this.handleError)
      );
  }

  login(credentials: any): Observable<any> {
    return this.http.post('/api/users/login', credentials)
      .pipe(
        catchError(this.handleError)
      );
  }

  logout() {
    // Remove stored JWT from local storage or cookies
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    // Check if JWT exists in local storage or cookies
    return !!localStorage.getItem('token');
  }

  private handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error occurred. Handle it accordingly.
      errorMessage = 'An error occurred: ' + error.error.message;
    } else {
      // Backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      errorMessage = `Backend returned code ${error.status}: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
