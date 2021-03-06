import { Router, ActivatedRoute } from "@angular/router";
import { AlunoService } from "../aluno.service";
import { Aluno } from "./../aluno";
import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';


@Component({
  selector: "app-list-aluno",
  templateUrl: "list-aluno.component.html",
  styleUrls: ["list-aluno.component.css"]
})
export class ListAlunoComponent implements OnInit {
  public paginaAtual = 1;
  aluno: Aluno;
  alunos: Observable<Aluno[]>;
  handleSearch(value: string){
    //console.log(value);
    this.filtro_valor = value;
  }

  filtro_valor = ''

  constructor(
    private Route: ActivatedRoute,
    private alunoservice: AlunoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.alunos = this.alunoservice.getAlunoList();
  }
  list() {
    this.router.navigate(["alunos"]);
  }

  deleteAluno(id: number) {
    this.alunoservice.deleteAluno(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error)
    );
  }

  detalheAluno(id: number) {
    this.router.navigate(['detailsAluno' ,id]);
  }

  updateAluno(id: number) {
    this.router.navigate(['updateAluno' ,id]);
  }
}
