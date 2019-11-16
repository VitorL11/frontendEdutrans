import { Router } from '@angular/router';
import { VeiculoService } from './../veiculo.service';
import { Veiculo } from './../veiculo'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-veiculo',
  templateUrl: './create-veiculo.component.html',
  styleUrls: ['./create-veiculo.component.css']
})
export class CreateVeiculoComponent implements OnInit {

    // Declaração de variáveis: vamos precisar de um objeto do tipo Aluno e uma variável do tipo boolean para poder manipular o HTML
    veiculo: Veiculo = new Veiculo();
    submitted = false;

    // Coloquei o Service do Aluno e um Router para poder mexer com o crud e com as rotas
    constructor(private veiculoservice: VeiculoService, private router: Router) { }

    //Vazio mesmo.
    ngOnInit() {
    }

  // De alguma forma, isso inicializa nossas variáveis. Mas não entendi esse método.
    newEscola(): void {
      this.submitted = false;
      this.veiculo = new Veiculo();
    }

    // Nosso método salvar. Nós precisamos de ter criado também o Service do ALuno para podermos fazer isso funcionar
    save() {
      this.veiculoservice.createVeiculo(this.veiculo)
        .subscribe(
          data => console.log(data),
          error => console.log(error)
        );
      this.veiculo = new Veiculo();

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

      this.router.navigate(['/lista-veiculos']);
    }

  }





