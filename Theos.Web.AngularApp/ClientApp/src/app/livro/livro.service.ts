import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Livros } from './livros'

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  private apiURL = "http://localhost:50606/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getLivro(): Observable<Livros[]> {
    return this.httpClient.get<Livros[]>(this.apiURL + '/Livroes/')
      .pipe(
        catchError(this.errorHandler)
      );
  }

  getLivros(id): Observable<Livros> {
    return this.httpClient.get<Livros>(this.apiURL + '/Livroes/' + id)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  createLivros(Livros): Observable<Livros> {
    return this.httpClient.post<Livros>(this.apiURL + '/Livroes/', JSON.stringify(Livros), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  updateLivros(id, Livros): Observable<Livros> {
    return this.httpClient.put<Livros>(this.apiURL + '/Livroes/' + id, JSON.stringify(Livros), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  deleteLivros(id) {
    return this.httpClient.delete<Livros>(this.apiURL + '/Livroes/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  errorHandler(error) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
