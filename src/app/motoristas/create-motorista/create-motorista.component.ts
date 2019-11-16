import { Motorista } from './../motorista';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MotoristaService } from '../motorista.service';

@Component({
  selector: 'app-create-motorista',
  templateUrl: './create-motorista.component.html',
  styleUrls: ['./create-motorista.component.css']
})
export class CreateMotoristaComponent implements OnInit {

  // Declaração de variáveis: vamos precisar de um objeto do tipo Aluno e uma variável do tipo boolean para poder manipular o HTML
  motorista: Motorista = new Motorista();
  submitted = false;

  // Coloquei o Service do Aluno e um Router para poder mexer com o crud e com as rotas
  constructor(private motoristaservice: MotoristaService, private router: Router) { }

  //Vazio mesmo.
  ngOnInit() {
  }

// De alguma forma, isso inicializa nossas variáveis. Mas não entendi esse método.
  newEscola(): void {
    this.submitted = false;
    this.motorista = new Motorista();
  }

  // Nosso método salvar. Nós precisamos de ter criado também o Service do ALuno para podermos fazer isso funcionar
  save() {
    this.motoristaservice.createMotorista(this.motorista)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
    this.motorista = new Motorista();

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

    this.router.navigate(['/lista-motoristas']);
  }

}
