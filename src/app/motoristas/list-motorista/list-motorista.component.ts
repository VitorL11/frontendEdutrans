import { Router, ActivatedRoute } from '@angular/router';
import { MotoristaService } from './../motorista.service';
import { Motorista } from './../motorista';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-motorista',
  templateUrl: './list-motorista.component.html',
  styleUrls: ['./list-motorista.component.css']
})
export class ListMotoristaComponent implements OnInit {


  motoristas: Motorista;


  constructor(private Route: ActivatedRoute, private router: Router,
              private motoristaservice: MotoristaService, ) {

  }


  ngOnInit() {
    this.motoristas = new Motorista();

    this.motoristas.id = this.Route.snapshot.params['id'];
    this.motoristaservice.getMotorista(this.motoristas.id)
    .subscribe(data=> {
      console.log(data)
      this.motoristas = data;
    }, error=> console.log(error));

}

  list(){
    this.router.navigate(['motoristas'])
  }

}








