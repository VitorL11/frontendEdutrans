import { AlunoService } from './../aluno.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from './../aluno';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-aluno',
  templateUrl: './details-aluno.component.html',
  styleUrls: ['./details-aluno.component.css']
})
export class DetailsAlunoComponent implements OnInit {
  id: number;
  aluno: Aluno;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunoService: AlunoService
  ) {}

  ngOnInit() {
    this.aluno = new Aluno();

    this.id = this.route.snapshot.params['id'];
    //console.log(this.id);
    this.alunoService.getAluno(this.id).subscribe(
      data => {
        console.log(data)
        this.aluno = data;
      },
      error => console.log(error)
    );
      console.log(this.aluno.nome)
    this.aluno.nome = 'yteste';
  }

  list() {
    this.router.navigate(["listAluno"]);
  }
}
