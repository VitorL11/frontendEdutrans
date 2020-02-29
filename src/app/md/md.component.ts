import { AlunoService } from "./../alunos/aluno.service";
import { LinhaService } from "../linhas/linha.service";
import { MotoristaService } from "../motoristas/motorista.service";

import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { Aluno } from "../alunos/aluno";
import { Linha } from "../linhas/linha";
import { Motorista } from "../motoristas/motorista";

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
  motoristas: Observable<Motorista>;

  aluno: Aluno = new Aluno();
  linha: Linha = new Linha();
  motorista: Motorista = new Motorista();

  submitted = false;
  form: FormGroup;

  constructor(  
    private alunoservice: AlunoService,
    private linhaservice: LinhaService,
    private motoristaservice: MotoristaService, 
    private formBuilder: FormBuilder
  ){

    this.form = this.formBuilder.group({
      alunos: [""],
      motoristas: [""]
      
    });
  }

  buscaAluno(e) {
    this.linha.id = e.target.value;
    console.log(this.linha.nome_linha);
    this.alunos = this.alunoservice.queryAluno(this.linha.nome_linha);
    this.motoristas = this.motoristaservice.queryMotorista(this.linha.nome_linha);
  }

  ngOnInit() {
    this.alunos = this.alunoservice.getAlunoList();
    this.linhas = this.linhaservice.getLinhaList();
    this.motoristas = this.motoristaservice.getMotoristaList();
  }

  reloadData() {
    console.log("entrando no reload data");
    //this.alunos = this.alunoservice.queryAluno(1);
    if (this.linha.id == null) {
      this.linhas = this.linhaservice.getLinhaList();
    }
  }
}