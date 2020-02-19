import { ActivatedRoute, Route, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AlunoService } from "./../aluno.service";
import { EscolaService } from './../../escolas/escola.service';
import { LinhaService } from './../../linhas/linha.service';
import { Aluno } from "./../aluno";
import { Linha } from 'src/app/linhas/linha';
import { Escola } from 'src/app/escolas/escola';
import { Component, OnInit } from "@angular/core";


@Component({
  selector: "app-update-aluno",
  templateUrl: "./update-aluno.component.html",
  styleUrls: ["./update-aluno.component.css"]
})
export class UpdateAlunoComponent implements OnInit {
  linhas: Observable<Linha[]>;
  escolas: Observable<Escola[]>;
  id: number;
  aluno: Aluno;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunoservice: AlunoService,
    private linhaservice: LinhaService,
    private escolaservice: EscolaService,
  ) {}

  ngOnInit() {
    this.aluno = new Aluno();

    this.id = this.route.snapshot.params["id"];

    this.alunoservice.getAluno(this.id).subscribe(
      data => {
        console.log(data), (this.aluno = data);
      },
      error => console.log(error)
    );

    this.escolas = this.escolaservice.getEscolaList();
    this.linhas = this.linhaservice.getLinhaList();
  }

  updateAluno() {
    this.alunoservice.updateAluno(this.id, this.aluno).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.aluno = new Aluno();
    this.gotoList();
  }

  onSubmit() {
    this.updateAluno();
    this.submitted = true;
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(["/listAluno"]);
  }
}
