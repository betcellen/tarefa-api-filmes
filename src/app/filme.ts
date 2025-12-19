import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FilmeService {
  private apiKey = '2c6fceb1';
  private apiUrl = 'https://www.omdbapi.com/';

  constructor(private http: HttpClient) { }

  buscarIndividual(titulo: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?apikey=${this.apiKey}&t=${titulo}`);
  }

  buscarLista(titulo: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?apikey=${this.apiKey}&s=${titulo}`);
  }
}