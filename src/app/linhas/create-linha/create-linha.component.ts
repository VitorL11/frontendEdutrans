import { Linha } from './../linha';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LinhaService } from '../linha.service';

@Component({
  selector: 'app-create-linha',
  templateUrl: './create-linha.component.html',
  styleUrls: ['./create-linha.component.css']
})
export class CreateLinhaComponent implements OnInit {

    // Declaração de variáveis: vamos precisar de um objeto do tipo Aluno e uma variável do tipo boolean para poder manipular o HTML
    linha: Linha = new Linha();
    submitted = false;

    // Coloquei o Service do Aluno e um Router para poder mexer com o crud e com as rotas
    constructor(private linhaservice: LinhaService, private router: Router) { }

    //Vazio mesmo.
    ngOnInit() {
    }

  // De alguma forma, isso inicializa nossas variáveis. Mas não entendi esse método.
    newLinha(): void {
      this.submitted = false;
      this.linha = new Linha();
    }

    // Nosso método salvar. Nós precisamos de ter criado também o Service do ALuno para podermos fazer isso funcionar
    save() {
      this.linhaservice.createLinha(this.linha)
        .subscribe(
          data => console.log(data),
          error => console.log(error)
        );
      this.linha = new Linha();

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

      this.router.navigate(['/lista-linhas']);
    }

  }
