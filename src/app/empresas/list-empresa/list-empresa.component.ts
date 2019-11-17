import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { EmpresaService } from './../empresa.service';
import { Empresa } from './../empresa';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-empresa',
  templateUrl: './list-empresa.component.html',
  styleUrls: ['./list-empresa.component.css']
})
export class ListEmpresaComponent implements OnInit {

  // Aqui é necessário ter realmente um Observable do Object
  empresas: Observable<Empresa[]>;

  // Construtor no padrão FIFA de qualidade
  constructor(private empresaservice: EmpresaService, private router: Router) {

  }

  //Aqui já vai precisar ter inicializando o método reloadData, pra poder pegar toda a lista do seu objeto que está salva no banco de dados
  ngOnInit() {
    this.reloadData();

}

// Esse método vai carregar tudo que vc precisa do bacnco de dados, usando da comunicação do Service do seu objeto
   reloadData() {
    this.empresas = this.EmpresaService.getEmpresaList();
  }

  deleteEmpresa(id: number) {
    this.empresaservice.deleteEmpresa(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateEmpresa(id: number) {
    this.router.navigate(['update-empresa', id]);
    this.reloadData();
  }
}


