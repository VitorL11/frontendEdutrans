import { Motorista } from './../motorista';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MotoristaService } from '../motorista.service';

@Component({
  selector: 'app-create-motorista',
  templateUrl: './create-motorista.component.html',
  styleUrls: ['./create-motorista.component.css']
})
export class CreateMotoristaComponent implements OnInit {

  motorista: Motorista = new Motorista();
  submitted = false;

  constructor(private motoristaservice: MotoristaService, private router: Router) { }

  ngOnInit() {
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
    this.gotoList();
  }

  gotoList() {

    this.router.navigate(['/lista-motoristas']);
  }

}
