import { EmpresaService } from 'src/app/empresas/empresa.service';
import { LinhaService } from 'src/app/linhas/linha.service';
import { MotoristaService } from '../motorista.service';
import { VeiculoService } from './../../veiculos/veiculo.service';

import { Empresa } from 'src/app/empresas/empresa';
import { Linha } from 'src/app/linhas/linha';
import { Motorista } from './../motorista';
import { Veiculo } from 'src/app/veiculos/veiculo';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { estados, estadosPorId, estadoPorSigla } from 'estados-br'

@Component({
  selector: 'app-create-motorista',
  templateUrl: './create-motorista.component.html',
  styleUrls: ['./create-motorista.component.css']
})
export class CreateMotoristaComponent implements OnInit {
  empresas: Observable<Empresa>;
  linhas: Observable<Linha>;
  veiculos: Observable<Veiculo>;
  motorista: Motorista = new Motorista();
  submitted = false;

  constructor(private motoristaservice: MotoristaService,
    private empresaservice: EmpresaService,
    private linhaservice: LinhaService,
    private veiculoservice: VeiculoService,

    private router: Router) { }

  ngOnInit() {
    this.linhas = this.linhaservice.getLinhaList();
    this.veiculos = this.veiculoservice.getVeiculoList();
    this.empresas = this.empresaservice.getEmpresaList();



    console.log(estados);
  }

  newEscola(): void {
    this.submitted = false;
    this.motorista = new Motorista();
  }


  save() {
    this.motoristaservice.createMotorista(this.motorista)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
    this.motorista = new Motorista();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/listMotorista']);
  }

}
