import { MotoristaService } from './../motoristas/motorista.service';
import { Component, OnInit } from '@angular/core';
import { Motorista } from '../motoristas/motorista';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-mot',
  templateUrl: './list-mot.component.html',
  styleUrls: ['./list-mot.component.css']
})
export class ListMotComponent implements OnInit {
  motorista: Motorista;
  motoristas: Observable<Motorista[]>;

  handleSearch(value: string){
    //console.log(value);
    this.filtro_valor = value;
  }

  filtro_valor = ''

  constructor(private motoristaservice: MotoristaService ) { }

  ngOnInit() {
    this.motoristas = this.motoristaservice.getMotoristaList();
  }

}
