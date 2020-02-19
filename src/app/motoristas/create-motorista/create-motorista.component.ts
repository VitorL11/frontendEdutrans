import { VeiculoService } from './../../veiculos/veiculo.service';
import { MotoristaService } from '../motorista.service';
import { Motorista } from './../motorista';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LinhaService } from 'src/app/linhas/linha.service';
import { Linha } from 'src/app/linhas/linha';
import { Veiculo } from 'src/app/veiculos/veiculo';

@Component({
  selector: 'app-create-motorista',
  templateUrl: './create-motorista.component.html',
  styleUrls: ['./create-motorista.component.css']
})
export class CreateMotoristaComponent implements OnInit {
  linhas: Observable<Linha>;
  veiculos: Observable<Veiculo>;
  motorista: Motorista = new Motorista();
  submitted = false;

  constructor(private motoristaservice: MotoristaService,
    private linhaservice: LinhaService,
    private veiculoservice: VeiculoService,
    private router: Router) { }

  ngOnInit() {
    this.linhas = this.linhaservice.getLinhaList();
    this.veiculos = this.veiculoservice.getVeiculoList();
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
