import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LinhaService } from './../linha.service';
import { Linha } from './../linha';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-linha',
  templateUrl: './list-linha.component.html',
  styleUrls: ['./list-linha.component.css']
})
export class ListLinhaComponent implements OnInit {

  // Aqui é necessário ter realmente um Observable do Object
  linhas: Observable<Linha[]>;

  // Construtor no padrão FIFA de qualidade
  constructor(private linhaservice: LinhaService, private router: Router) {

  }

  //Aqui já vai precisar ter inicializando o método reloadData, pra poder pegar toda a lista do seu objeto que está salva no banco de dados
  ngOnInit() {
    this.reloadData();

}

// Esse método vai carregar tudo que vc precisa do bacnco de dados, usando da comunicação do Service do seu objeto
   reloadData() {
    this.linhas = this.LinhaService.getLinhaList();
  }

  deleteLinha(id: number) {
    this.linhaservice.deleteLinha(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateLinha(id: number) {
    this.router.navigate(['update-linha', id]);
    this.reloadData();
  }
}


