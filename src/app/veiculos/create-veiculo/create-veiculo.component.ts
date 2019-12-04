import { Router } from '@angular/router';
import { VeiculoService } from './../veiculo.service';
import { Veiculo } from './../veiculo'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-veiculo',
  templateUrl: './create-veiculo.component.html',
  styleUrls: ['./create-veiculo.component.css']
})
export class CreateVeiculoComponent implements OnInit {


    veiculo: Veiculo = new Veiculo();
    submitted = false;

    constructor(private veiculoservice: VeiculoService, private router: Router) { }

    ngOnInit() {
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
      this.gotoList();
    }

    gotoList() {

      this.router.navigate(['/lista-veiculos']);
    }

  }





