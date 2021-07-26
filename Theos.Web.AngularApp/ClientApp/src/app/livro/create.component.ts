import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { LivrosService } from "../livro/livro.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  //positions: Position[] = [];
  createForm;

  constructor(
    public livrosService: LivrosService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.createForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      descricao: [''],
      valor: [''],
      data: [''],
    });
  }

  ngOnInit(): void {
  
  }

  onSubmit(formData) {
    this.livrosService.createLivros(formData.value).subscribe(res => {
      this.router.navigateByUrl('livros/list');
    });
  }
}
