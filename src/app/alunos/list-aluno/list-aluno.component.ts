import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Aluno } from "./../aluno";
import { Router } from "@angular/router";

@Component({
  selector: "app-list-aluno",
  templateUrl: "list-aluno.component.html",
  styleUrls: ["list-aluno.component.css"]
})
<<<<<<< HEAD

export class ListAlunoComponent implements OnInit {
  alunos: Observable<Aluno[]>;

   constructor(private alunoservice: AlunoService, private router: Router) {

=======
export class ListAlunoComponent implements OnInit {
  // Aqui é necessário ter realmente um Observable do Object
  alunos: Observable<Aluno[]>;

  // Construtor no padrão FIFA de qualidade
  constructor(private alunoservice: AlunoService, private router: Router) {}
>>>>>>> 84e7a420f8ff739abe998af218999b136cb2946c

  }
  ngOnInit() {
    this.reloadData();
<<<<<<< HEAD
}

   reloadData() {
=======
  }

  // Esse método vai carregar tudo que vc precisa do bacnco de dados, usando da comunicação do Service do seu objeto
  reloadData() {
>>>>>>> 84e7a420f8ff739abe998af218999b136cb2946c
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
