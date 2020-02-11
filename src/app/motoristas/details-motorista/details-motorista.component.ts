import { MotoristaService } from './../motorista.service';
import { EscolaService } from './../../escolas/escola.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Motorista } from './../motorista';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-motorista',
  templateUrl: './details-motorista.component.html',
  styleUrls: ['./details-motorista.component.css']
})
export class DetailsMotoristaComponent implements OnInit {
  id: number;
  motorista: Motorista;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private motoristaService: MotoristaService
  ) {}

  ngOnInit() {
    this.motorista = new Motorista();

    this.id = this.route.snapshot.params['id'];
    //console.log(this.id);
    this.motoristaService.getMotorista(this.id).subscribe(
      data => {
        console.log(data)
        this.motoristaService = data;
      },
      error => console.log(error)
    );
      console.log(this.motorista.nome)
    this.motorista.nome = 'yteste';
  }

  list() {
    this.router.navigate(["listMotorista"]);
  }
}

