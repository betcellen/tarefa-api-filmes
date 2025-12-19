import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilmeService } from '../filme.service';

@Component({
  selector: 'app-filme',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filme.html',
  styleUrl: './filme.css'
})
export class FilmeComponent {
  titulo: string = '';
  tipo: string = 't'; 
  resultado: any = null;
  lista: any[] = [];
  carregando: boolean = false;
  erro: string = '';

  constructor(private service: FilmeService) {}

  pesquisar() {
    if (!this.titulo.trim()) {
      this.erro = 'Por favor, digite um título!';
      return;
    }

    this.carregando = true;
    this.erro = '';
    this.resultado = null;
    this.lista = [];

    if (this.tipo === 't') {
      this.service.buscarIndividual(this.titulo).subscribe({
        next: (res) => {
          this.carregando = false;
          if (res.Response === 'False') {
            this.erro = res.Error || 'Filme não encontrado!';
            this.resultado = null;
          } else {
            this.resultado = res;
          }
        },
        error: (err) => {
          this.carregando = false;
          console.error('Erro ao buscar filme:', err);
          if (err.status === 0) {
            this.erro = 'Erro de conexão: Verifique sua internet ou se o servidor está disponível. Pode ser um erro de CORS.';
          } else if (err.status === 404) {
            this.erro = 'Filme não encontrado!';
          } else if (err.error?.Error) {
            this.erro = err.error.Error;
          } else {
            this.erro = `Erro ao buscar o filme: ${err.message || err.statusText}`;
          }
        }
      });
    } else {
      this.service.buscarLista(this.titulo).subscribe({
        next: (res) => {
          this.carregando = false;
          if (res.Response === 'False') {
            this.erro = res.Error || 'Nenhum filme encontrado!';
            this.lista = [];
          } else {
            this.lista = res.Search || [];
          }
        },
        error: (err) => {
          this.carregando = false;
          console.error('Erro ao buscar filmes:', err);
          if (err.status === 0) {
            this.erro = 'Erro de conexão: Verifique sua internet ou se o servidor está disponível. Pode ser um erro de CORS.';
          } else if (err.status === 404) {
            this.erro = 'Nenhum filme encontrado!';
          } else if (err.error?.Error) {
            this.erro = err.error.Error;
          } else {
            this.erro = `Erro ao buscar filmes: ${err.message || err.statusText}`;
          }
        }
      });
    }
  }
}