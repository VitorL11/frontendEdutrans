import {Escola} from './../escola'
import { EscolaService } from './../escola.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-escola',
  templateUrl: './create-escola.component.html',
  styleUrls: ['./create-escola.component.css']
})
export class CreateEscolaComponent implements OnInit {

  // Declaração de variáveis: vamos precisar de um objeto do tipo Aluno e uma variável do tipo boolean para poder manipular o HTML
  escola: Escola = new Escola();
  submitted = false;

  // Coloquei o Service do Aluno e um Router para poder mexer com o crud e com as rotas
  constructor(private escolaservice: EscolaService, private router: Router) { }

  //Vazio mesmo.
  ngOnInit() {
  }

// De alguma forma, isso inicializa nossas variáveis. Mas não entendi esse método.
  newEscola(): void {
    this.submitted = false;
    this.escola = new Escola();
  }

  // Nosso método salvar. Nós precisamos de ter criado também o Service do ALuno para podermos fazer isso funcionar
  save() {
    this.escolaservice.createEscola(this.escola)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
    this.escola = new Escola();

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

    this.router.navigate(['/lista-escolas']);
  }

}
