import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Livros } from "./Livros";

import { LivrosService } from "./livro.service";


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  livros: Livros;
  editForm;

  constructor(
    public livrossService: LivrosService,

    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.editForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      descricao: [''],
      valor: [''],
      data: [''],
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['livrosId'];

 

    this.livrossService.getLivros(this.id).subscribe((data: Livros) => {
      this.livros = data;
      this.editForm.patchValue(data);
    });
  }

  onSubmit(formData) {
    this.livrossService.updateLivros(this.id, formData.value).subscribe(res => {
      this.router.navigateByUrl('livro/livro');
    });
  }
}
