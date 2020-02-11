import { VeiculoService } from './../veiculo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../veiculo';

@Component({
  selector: 'app-details-veiculo',
  templateUrl: './details-veiculo.component.html',
  styleUrls: ['./details-veiculo.component.css']
})
export class DetailsVeiculoComponent implements OnInit {
  id: number;
  veiculo: Veiculo;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private veiculoService: VeiculoService
  ) {}

  ngOnInit() {
    this.veiculo = new Veiculo();

    this.id = this.route.snapshot.params['id'];
    //console.log(this.id);
    this.veiculoService.getVeiculo(this.id).subscribe(
      data => {
        console.log(data)
        this.veiculoService = data;
      },
      error => console.log(error)
    );
      console.log(this.veiculo.placa)
    this.veiculo.placa = 'teste';
  }

  list() {
    this.router.navigate(["listVeiculo"]);
  }
}
