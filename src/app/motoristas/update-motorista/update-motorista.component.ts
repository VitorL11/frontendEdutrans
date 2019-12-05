import { MotoristaService } from './../motorista.service';
import { Motorista } from './../motorista';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router} from '@angular/router'

@Component({
  selector: 'app-update-motorista',
  templateUrl: './update-motorista.component.html',
  styleUrls: ['./update-motorista.component.css']
})

export class UpdateMotoristaComponent implements OnInit {

  id: number;
  motorista: Motorista;
  submitted = false;
  constructor(private route: ActivatedRoute, private router: Router, private motoristaservice: MotoristaService) { }

  ngOnInit() {
    this.motorista = new Motorista();

this.id = this.route.snapshot.params['id'];

this.motoristaservice.getMotorista(this.id)
      .subscribe(data => {
        console.log(data)
        this.motorista = data;
      }, error => console.log(error));
  }

updateMotorista() {
    this.motoristaservice.updateMotorista(this.motorista)
    .subscribe(data => console.log(data), error => console.log(error));
    this.motorista = new Motorista();
    this.gotoList();
  }

onSubmit() {
    this.updateMotorista();
    this.submitted = true;
    this.gotoList();
  }

gotoList() {
    this.router.navigate(['/listar-motorista']);
  }

}

