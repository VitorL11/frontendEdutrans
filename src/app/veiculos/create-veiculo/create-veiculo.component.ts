import { Router } from '@angular/router';
import { VeiculoService } from './../veiculo.service';
import { ListVeiculoComponent } from './../list-veiculo/list-veiculo.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-veiculo',
  templateUrl: './create-veiculo.component.html',
  styleUrls: ['./create-veiculo.component.css']
})
export class CreateVeiculoComponent implements OnInit {

  veiculo: Veiculo  = new Veiculo();
  submitted = false;

  constructor(veiculoService: VeiculoService, router: Router) { }

  ngOnInit() {
  }

}
newVeiculo(): void {
  this.submitted = false;
  this.escola = new Veiculo();
}

save() {
  this.escolaService.createVeiculo(this.veiculo)
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
  this.router.navigate(['/ListVeiculoComponent']);
}




