import { VeiculoService } from './../veiculos/veiculo.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../veiculos/veiculo';

@Component({
  selector: 'app-list-vei',
  templateUrl: './list-vei.component.html',
  styleUrls: ['./list-vei.component.css']
})
export class ListVeiComponent implements OnInit {
  veiculo: Veiculo;
  veiculos: Observable<Veiculo[]>;

  handleSearch(value: string){
    //console.log(value);
    this.filtro_valor = value;
  }

  filtro_valor = ''

  constructor(private veiculoservice: VeiculoService ) { }

  ngOnInit() {
    this.veiculos = this.veiculoservice.getVeiculoList();
  }

}
