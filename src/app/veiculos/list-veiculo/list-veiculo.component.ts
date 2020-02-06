import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { VeiculoService } from './../veiculo.service';
import { Veiculo } from './../veiculo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-veiculo',
  templateUrl: './list-veiculo.component.html',
  styleUrls: ['./list-veiculo.component.css']
})

export class ListVeiculoComponent implements OnInit {
  veiculo: Veiculo
  veiculos: Observable<Veiculo[]>;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private veiculoservice: VeiculoService) {

  }

  ngOnInit() {
    this.reloadData();
}
  reloadData(){
    this.veiculos = this.veiculoservice.getVeiculoList();
  }
  list(){
    this.router.navigate(['veiculos']);
}
  deleteVeiculo(id: number) {
  this.veiculoservice.deleteVeiculo(id).subscribe(
    data => {
      console.log(data);
      this.reloadData();
    },
    error => console.log(error)
  );
}

detalheVeiculo(id: number) {
  this.router.navigate(["details", id]);
  }

updateVeiculo(id: number) {
  this.router.navigate(["update", id]);
  }
}

