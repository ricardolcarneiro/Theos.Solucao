import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Livros } from "./livros";
import { LivrosService } from "./livro.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: number;
  livro: Livros;

  constructor(
    public livrosService: LivrosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['livroId'];
    this.livrosService.getLivros(this.id).subscribe((data: Livros) => {
      this.livro = data;
    });
  }
}
