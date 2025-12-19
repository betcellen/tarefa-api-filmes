import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { OMDB_API_KEY, OMDB_API_URL } from './omdb-config';

@Injectable({ providedIn: 'root' })
export class FilmeService {
  private apiKey = OMDB_API_KEY;
  private apiUrl = OMDB_API_URL;

  constructor(private http: HttpClient) { }

  private chaveValida(): boolean {
    return !!this.apiKey && !this.apiKey.includes('COLOQUE_SUA_CHAVE');
  }

  buscarIndividual(titulo: string): Observable<any> {
    if (!this.chaveValida()) {
      return throwError(() => new Error('Chave da API OMDB não configurada. Edite src/app/omdb-config.ts e coloque sua chave.'));
    }

    const url = `${this.apiUrl}?apikey=${this.apiKey}&t=${encodeURIComponent(titulo)}`;
    return this.http.get(url);
  }

  buscarLista(titulo: string): Observable<any> {
    if (!this.chaveValida()) {
      return throwError(() => new Error('Chave da API OMDB não configurada. Edite src/app/omdb-config.ts e coloque sua chave.'));
    }

    const url = `${this.apiUrl}?apikey=${this.apiKey}&s=${encodeURIComponent(titulo)}`;
    return this.http.get(url);
  }
}
