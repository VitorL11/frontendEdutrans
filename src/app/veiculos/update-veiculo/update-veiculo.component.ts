import { ActivatedRoute, Route, Router } from '@angular/router';
import { VeiculoService } from './../veiculo.service';
import { Veiculo } from './../veiculo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-veiculo',
  templateUrl: './update-veiculo.component.html',
  styleUrls: ['./update-veiculo.component.css']
})

export class UpdateVeiculoComponent implements OnInit {
  id: number;
  veiculo: Veiculo;
  submitted = false;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private veiculoservice: VeiculoService) { }

  ngOnInit() {
    this.veiculo = new Veiculo();

this.id = this.route.snapshot.params['id'];

this.veiculoservice.getVeiculo(this.id)
      .subscribe(data => {
        console.log(data)
        this.veiculo = data;
      }, error => console.log(error));
  }

updateVeiculo() {
    this.veiculoservice.updateVeiculo(this.veiculo)
      .subscribe(data => console.log(data), error => console.log(error));
    this.veiculo = new Veiculo();
    this.gotoList();
  }

onSubmit() {
    this.updateVeiculo();
    this.submitted = true;
    this.gotoList();
  }

gotoList() {
    this.router.navigate(['/listar-veiculo']);
  }

}

