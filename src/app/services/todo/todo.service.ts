import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private apiUrl = 'https://localhost:7149/api/TodoItems';

  constructor(private http: HttpClient) {}

  getMyTodoItems(): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.get(`${this.apiUrl}/GetMyTodoItems`, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  getTodoItemById(id: number): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.get(`${this.apiUrl}/GetTodoItemById/${id}`, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  updateTodoItem(id:any,todoItem: any): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.put(`${this.apiUrl}/Update/${id}`, todoItem, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  deleteTodoItem(id: number): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.delete(`${this.apiUrl}/DeleteTodoItem/${id}`, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  updateStatusTodoItem(id: number): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.put(`${this.apiUrl}/UpdateStatus/${id}`, null, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  private getAuthHeaders() {
    const token = localStorage.getItem('token');
    return { Authorization: `Bearer ${token}` };
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }
}
