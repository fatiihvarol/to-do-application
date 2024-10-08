import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private apiUrl = 'https://localhost:7149/api/TodoItems/GetMyTodoItems';

  constructor(private http: HttpClient) {}

  getMyTodoItems(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };
  
    return this.http.get(this.apiUrl, { headers }).pipe(
      catchError(this.handleError)
    );
  }
  

  private handleError(error: HttpErrorResponse) {
    // Customize error handling based on the response
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      console.error('An error occurred:', error.error.message);
    } else {
      // Server-side error
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }
}
