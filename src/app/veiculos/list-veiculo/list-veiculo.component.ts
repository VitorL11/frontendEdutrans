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

  constructor(private route: ActivatedRoute, private router: Router,
              private veiculoservice: VeiculoService) {

  }


  ngOnInit() {
    this.veiculo = new Veiculo();

    this.veiculo.id = this.route.snapshot.params['id'];
    this.veiculoservice.getVeiculo(this.veiculo.id)
    .subscribe(data=> {
      console.log(data)
      this.veiculo = data;
    }, error=> console.log(error));


}

list(){
  this.router.navigate(['veiculos'])
}

}


