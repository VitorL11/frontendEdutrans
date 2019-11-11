import { ListAlunoComponent } from './../list-aluno/list-aluno.component';
import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../aluno.service';

@Component({
  selector: 'app-create-aluno',
  templateUrl: './create-aluno.component.html',
  styleUrls: ['./create-aluno.component.css']
})
export class CreateAlunoComponent implements OnInit {
  aluno: any;
  submitted: boolean;




  constructor(private alunoService: AlunoService, router: Router) { }

  ngOnInit() {
  }



  newAluno(): void {
    this.submitted = false;
    this.aluno = new Aluno();
  }

  save() {
    this.alunoService.createAluno(this.aluno)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
    this.aluno = new Aluno();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/ListAlunoComponent']);
  }

}
