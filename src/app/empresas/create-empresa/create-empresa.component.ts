import { EmpresaService } from './../empresa.service';
import { Component, OnInit } from '@angular/core';
import { Empresa } from '../empresa';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-empresa',
  templateUrl: './create-empresa.component.html',
  styleUrls: ['./create-empresa.component.css']
})
export class CreateEmpresaComponent implements OnInit {

  // Declaração de variáveis: vamos precisar de um objeto do tipo Aluno e uma variável do tipo boolean para poder manipular o HTML
  empresa: Empresa = new Empresa();
  submitted = false;

  // Aqui ta certinho, você colocou o Service do Aluno e um Router para poder mexer com o crud e com as rotas
  constructor(private empresaservice: EmpresaService, private router: Router) { }

  //Vazio mesmo.
  ngOnInit() {
  }

  // De alguma forma, isso inicializa nossas variáveis. Mas não entendi esse método.
  newEmpresa(): void {
    this.submitted = false;
    this.empresa = new Empresa();
  }

  // Nosso método salvar. Nós precisamos de ter criado também o Service do Empresa para podermos fazer isso funcionar
  save() {
    this.empresaservice.createEmpresa(this.empresa)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
    this.empresa = new Empresa();

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

    this.router.navigate(['/lista-empresas']);
  }

}
