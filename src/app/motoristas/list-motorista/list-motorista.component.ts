import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MotoristaService } from './../motorista.service';
import { Motorista } from './../motorista';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-motorista',
  templateUrl: './list-motorista.component.html',
  styleUrls: ['./list-motorista.component.css']
})
export class ListMotoristaComponent implements OnInit {

  // Aqui é necessário ter realmente um Observable do Object
  motoristas: Observable<Motorista[]>;

  // Construtor no padrão FIFA de qualidade
  constructor(private motoristaservice: MotoristaService, private router: Router) {

  }

  //Aqui já vai precisar ter inicializando o método reloadData, pra poder pegar toda a lista do seu objeto que está salva no banco de dados
  ngOnInit() {
    this.reloadData();

}

// Esse método vai carregar tudo que vc precisa do bacnco de dados, usando da comunicação do Service do seu objeto
   reloadData() {
    this.motoristas = this.MotoristaService.getMotoristaList();
  }

  deleteMotorista(id: number) {
    this.motoristaservice.deleteMotorista(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateMotorista(id: number) {
    this.router.navigate(['update-motorista', id]);
    this.reloadData();
  }
}



