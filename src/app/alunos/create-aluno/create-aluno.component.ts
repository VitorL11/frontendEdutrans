import { EscolaService } from './../../escolas/escola.service';
import { Observable } from 'rxjs';
import { LinhaService } from './../../linhas/linha.service';
import { AlunoService } from '../aluno.service';
import { Aluno } from './../aluno';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Linha } from 'src/app/linhas/linha';
import { Escola } from 'src/app/escolas/escola';

@Component({
  selector: 'app-create-aluno',
  templateUrl: './create-aluno.component.html',
  styleUrls: ['./create-aluno.component.css']
})

export class CreateAlunoComponent implements OnInit {
  linhas: Observable<Linha>;
  aluno: Aluno = new Aluno();
  escolas: Observable<Escola>;
  submitted = false;

  constructor(private alunoService: AlunoService,
    private linhaservice: LinhaService,
    private escolaservice: EscolaService,
    private router: Router) { }

  ngOnInit() {
    this.linhas = this.linhaservice.getLinhaList();
    this.escolas = this.escolaservice.getEscolaList();

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
    this.router.navigate(['/listAluno']);
  }

}
