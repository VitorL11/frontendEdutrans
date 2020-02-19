import { Observable } from "rxjs";
import { Router, ActivatedRoute } from "@angular/router";
import { MotoristaService } from "./../motorista.service";
import { Motorista } from "./../motorista";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-list-motorista",
  templateUrl: "./list-motorista.component.html",
  styleUrls: ["./list-motorista.component.css"]
})
export class ListMotoristaComponent implements OnInit {
  motorista: Motorista;
  motoristas: Observable<Motorista[]>;

  handleSearch(value: string){
    //console.log(value);
    this.filtro_valor = value;
  }

  filtro_valor = ''

  constructor(
    private Route: ActivatedRoute,
    private router: Router,
    private motoristaservice: MotoristaService
  ) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.motoristas = this.motoristaservice.getMotoristaList();
  }
  list() {
    this.router.navigate(["motoristas"]);
  }
  deleteMotorista(id: number) {
    this.motoristaservice.deleteMotorista(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error)
    );
  }

  detalheMotorista(id: number) {
    this.router.navigate(['detailsMotorista', id]);
  }

  updateMotorista(id: number) {
    this.router.navigate(['updateMotorista', id]);
  }
}
