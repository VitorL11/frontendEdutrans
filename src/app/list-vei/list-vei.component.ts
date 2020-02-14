import { VeiculoService } from './../veiculos/veiculo.service';
import { Component, OnInit } from '@angular/core';
import { Veiculo } from "./../veiculos/veiculo";
import { Observable } from 'rxjs';


@Component({
  selector: 'app-list-vei',
  templateUrl: './list-vei.component.html',
  styleUrls: ['./list-vei.component.css']
})
export class ListVeiComponent implements OnInit {
  veiculo: Veiculo;
  veiculos: Observable<Veiculo[]>;

  handleSearch(value: string) {
    this.filtro_valor = value;
  }

  filtro_valor = "";

  constructor(private veiculoservice: VeiculoService) {
   }

  ngOnInit() {
    this.veiculos = this.veiculoservice.getVeiculoList();
  }

}
