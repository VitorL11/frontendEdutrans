import { AlunoService } from "./../alunos/aluno.service";
import { Component, OnInit } from "@angular/core";
import { LinhaService } from "../linhas/linha.service";
import { Observable } from "rxjs";
import { Linha } from "../linhas/linha";
import { Aluno } from "../alunos/aluno";

@Component({
  selector: "app-md",
  templateUrl: "./md.component.html",
  styleUrls: ["./md.component.css"]
})
export class MdComponent implements OnInit {
  alunos: Observable<Aluno>;
  linhas: Observable<Linha>;
  aluno: Aluno = new Aluno();
  linha: Linha = new Linha();
  submitted = false;

  constructor(
    private linhaservice: LinhaService,
    private alunoservice: AlunoService
  ) {}

  ngOnInit() {
    this.linhas = this.linhaservice.getLinhaList();
    console.log(this.linhas);
    this.reloadData();
  }

  reloadData() {
    this.alunos = this.alunoservice.queryAluno(1);
    //this.alunos = this.alunoservice.getAlunoList();
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.linha.id);
  }

}
