import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { VeiculoService } from './../veiculo.service';
import { Veiculo } from './../veiculo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-veiculo',
  templateUrl: './list-veiculo.component.html',
  styleUrls: ['./list-veiculo.component.css']
})
export class ListVeiculoComponent implements OnInit {

  // Aqui é necessário ter realmente um Observable do Object
  veiculos: Observable<Veiculo[]>;


  // Construtor no padrão FIFA de qualidade
  constructor(private veiculoservice: VeiculoService, private router: Router) {

  }

  //Aqui já vai precisar ter inicializando o método reloadData, pra poder pegar toda a lista do seu objeto que está salva no banco de dados
  ngOnInit() {
    this.reloadData();

}

// Esse método vai carregar tudo que vc precisa do bacnco de dados, usando da comunicação do Service do seu objeto
   reloadData() {
    this.veiculos = this.VeiculoService.getVeiculoList();
  }

  deleteVeiculo(id: number) {
    this.veiculoservice.deleteVeiculo(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateVeiculo(id: number) {
    this.router.navigate(['update-veiculo', id]);
    this.reloadData();
  }
}



