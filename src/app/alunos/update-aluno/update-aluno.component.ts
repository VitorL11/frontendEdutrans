import { ActivatedRoute, Route, Router } from "@angular/router";
import { AlunoService } from "./../aluno.service";
import { Aluno } from "./../aluno";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-update-aluno",
  templateUrl: "./update-aluno.component.html",
  styleUrls: ["./update-aluno.component.css"]
})
export class UpdateAlunoComponent implements OnInit {
  id: number;
  aluno: Aluno;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private AlunoService: AlunoService
  ) {}

  ngOnInit() {
    this.aluno = new Aluno();

    this.id = this.route.snapshot.params["id"];

    this.AlunoService.getAluno(this.id).subscribe(
      data => {
        console.log(data), (this.aluno = data);
      },
      error => console.log(error)
    );
  }

  updateAluno() {
    this.AlunoService.updateAluno(this.id, this.aluno).subscribe(
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
    this.router.navigate(["/listAlunos/:id"]);
  }
}
