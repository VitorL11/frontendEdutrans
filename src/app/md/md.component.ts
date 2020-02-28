import { AlunoService } from "./../alunos/aluno.service";
import { Component, OnInit } from "@angular/core";
import { LinhaService } from "../linhas/linha.service";
import { Observable } from "rxjs";
import { Linha } from "../linhas/linha";
import { Aluno } from "../alunos/aluno";
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ValidatorFn
} from "@angular/forms";

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
  form: FormGroup;

  constructor(
    private linhaservice: LinhaService,
    private alunoservice: AlunoService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      alunos: [""]
    });
  }

  buscaAluno(e) {
    this.linha.id = e.target.value;
    console.log(this.linha.nome_linha);
    this.alunos = this.alunoservice.queryAluno(this.linha.nome_linha);
  }

  ngOnInit() {
    this.alunos = this.alunoservice.getAlunoList();
    this.linhas = this.linhaservice.getLinhaList();
  }

  reloadData() {
    console.log("entrando no reload data");
    //this.alunos = this.alunoservice.queryAluno(1);
    if (this.linha.id == null) {
      this.linhas = this.linhaservice.getLinhaList();
    }
  }
}
