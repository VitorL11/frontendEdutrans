import { Empresa } from './../../empresas/empresa';
import { VeiculoService } from './../veiculo.service';
import { Veiculo } from './../veiculo'
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmpresaService } from 'src/app/empresas/empresa.service';

@Component({
  selector: 'app-create-veiculo',
  templateUrl: './create-veiculo.component.html',
  styleUrls: ['./create-veiculo.component.css']
})
export class CreateVeiculoComponent implements OnInit {
    empresas: Observable<Empresa>;
    veiculo: Veiculo = new Veiculo();
    submitted = false;

    constructor(private veiculoservice: VeiculoService,
      private empresaservice: EmpresaService,
      private router: Router) { }

    ngOnInit() {
      this.empresas = this.empresaservice.getEmpresaList();
    }

    newEscola(): void {
      this.submitted = false;
      this.veiculo = new Veiculo();
    }

    save() {
      this.veiculoservice.createVeiculo(this.veiculo)
        .subscribe(
          data => console.log(data),
          error => console.log(error)
        );
      this.veiculo = new Veiculo();
      this.gotoList();
    }

    onSubmit() {
      this.submitted = true;
      this.save();
    }

    gotoList() {
      this.router.navigate(['/listVeiculo']);
    }

  }





