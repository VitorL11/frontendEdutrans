import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { EscolaService } from './../escola.service';
import { Escola } from './../escola';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-escola',
  templateUrl: './list-escola.component.html',
  styleUrls: ['./list-escola.component.css']
})
export class ListEscolaComponent implements OnInit {

  // Aqui é necessário ter realmente um Observable do Object
  escolas: Observable<Escola[]>;

  // Construtor no padrão FIFA de qualidade
  constructor(private escolaservice: EscolaService, private router: Router) {

  }

  //Aqui já vai precisar ter inicializando o método reloadData, pra poder pegar toda a lista do seu objeto que está salva no banco de dados
  ngOnInit() {
    this.reloadData();

}

// Esse método vai carregar tudo que vc precisa do bacnco de dados, usando da comunicação do Service do seu objeto
   reloadData() {
    this.escolas = this.EscolaService.getEscolaList();
  }

  deleteAluno(id: number) {
    this.escolaservice.deleteEscola(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateEscola(id: number) {
    this.router.navigate(['update-escola', id]);
    this.reloadData();
  }
}


