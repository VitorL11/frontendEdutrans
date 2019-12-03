import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Aluno } from "./../aluno";
import { Router } from "@angular/router";

@Component({
  selector: "app-list-aluno",
  templateUrl: "list-aluno.component.html",
  styleUrls: ["list-aluno.component.css"]
})
export class ListAlunoComponent implements OnInit {
  // Aqui é necessário ter realmente um Observable do Object
  alunos: Observable<Aluno[]>;

  // Construtor no padrão FIFA de qualidade
  constructor(private alunoservice: AlunoService, private router: Router) {}

  //Aqui já vai precisar ter inicializando o método reloadData, pra poder pegar toda a lista do seu objeto que está salva no banco de dados
  ngOnInit() {
    this.reloadData();
  }

  // Esse método vai carregar tudo que vc precisa do bacnco de dados, usando da comunicação do Service do seu objeto
  reloadData() {
    this.alunos = this.alunoservice.getAlunoList();
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

  updateAluno(id: number) {
    this.router.navigate(["update-aluno", id]);
    this.reloadData();
  }
}
