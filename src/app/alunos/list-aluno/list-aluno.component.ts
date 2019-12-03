import { AlunoService } from './../aluno.service';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { Aluno } from './../aluno';
import {Router} from '@angular/router'

@Component({
  selector: 'app-list-aluno',
  templateUrl: './list-aluno.compo lonent.html',
  styleUrls: ['./list-aluno.component.css']
})

export class ListAlunoComponent implements OnInit {
  alunos: Observable<Aluno[]>;

   constructor(private alunoservice: AlunoService, private router: Router) {


  }
  ngOnInit() {
    this.reloadData();
}

   reloadData() {
    this.alunos = this.alunoservice.getAlunoList();
  }

  deleteAluno(id: number) {
    this.alunoservice.deleteAluno(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateAluno(id: number) {
    this.router.navigate(['update-aluno', id]);
    this.reloadData();
  }
}

