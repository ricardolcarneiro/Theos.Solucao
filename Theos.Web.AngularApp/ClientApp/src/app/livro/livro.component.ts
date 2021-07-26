import { Component, OnInit } from '@angular/core';
import { Livros } from "./livros";
import { LivrosService } from "./livro.service";

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {

  lstLivros: Livros[] = [];

  constructor(public livrosService: LivrosService) { }

  ngOnInit(): void {
    this.livrosService.getLivro().subscribe((data: Livros[]) => {
      this.lstLivros = data;
    });
  }

  deletelivro(id) {
    this.livrosService.deleteLivros(id).subscribe(res => {
      this.lstLivros = this.lstLivros.filter(item => item.id !== id);
    });
  }
}
