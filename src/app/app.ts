import { Component } from '@angular/core';
import { FilmeComponent } from './filme/filme';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FilmeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'projeto-filmes';
}
