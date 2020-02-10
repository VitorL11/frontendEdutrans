import { AlunoService } from '../aluno.service';
import { Aluno } from './../aluno';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-aluno',
  templateUrl: './create-aluno.component.html',
  styleUrls: ['./create-aluno.component.css']
})

export class CreateAlunoComponent implements OnInit {

  aluno: Aluno = new Aluno();
  submitted = false;

  constructor(private alunoService: AlunoService,
    private router: Router) { }

  ngOnInit() {
  }

  newAluno(): void {
    this.submitted = false;
    this.aluno = new Aluno();
  }

  save() {
    this.alunoService.createAluno(this.aluno)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
        );
    this.aluno = new Aluno();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/listAluno/:id']);
  }

}
