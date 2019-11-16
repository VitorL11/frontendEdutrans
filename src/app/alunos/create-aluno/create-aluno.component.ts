import { Aluno } from './../aluno';
import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../aluno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-aluno',
  templateUrl: './create-aluno.component.html',
  styleUrls: ['./create-aluno.component.css']
})

export class CreateAlunoComponent implements OnInit {

  // Declaração de variáveis: vamos precisar de um objeto do tipo Aluno e uma variável do tipo boolean para poder manipular o HTML
  aluno: Aluno = new Aluno();
  submitted = false;

  // Coloquei o Service do Aluno e um Router para poder mexer com o crud e com as rotas
  constructor(private alunoService: AlunoService, private router: Router) { }

  //Vazio mesmo.
  ngOnInit() {
  }

// De alguma forma, isso inicializa nossas variáveis. Mas não entendi esse método.
  newAluno(): void {
    this.submitted = false;
    this.aluno = new Aluno();
  }

  // Nosso método salvar. Nós precisamos de ter criado também o Service do ALuno para podermos fazer isso funcionar
  save() {
    this.alunoService.createAluno(this.aluno)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
    this.aluno = new Aluno();

    // Aqui abre o método gotoList
    this.gotoList();
  }

  // Quando você clicar no botão para submeter o formulário, esse método é o que vai fazer a mágica acontecer
  onSubmit() {
    this.submitted = true;
    this.save();
    this.gotoList();
  }

  gotoList() {

    this.router.navigate(['/lista-alunos']);
  }

}
