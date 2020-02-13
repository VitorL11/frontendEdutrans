import { VeiculoService } from "./veiculos/veiculo.service";
import { Observable } from "rxjs";
import { MotoristaService } from "./motoristas/motorista.service";
import { Component, OnInit, ɵConsole } from "@angular/core";
import { Motorista } from "./motoristas/motorista";
import { Veiculo } from "./veiculos/veiculo";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  motorista: Motorista;
  motoristas: Observable<Motorista[]>;

  veiculo: Veiculo;
  veiculos: Observable<Veiculo[]>;


  handleSearch(value: string) {
    this.filtro_valor = value;
  }

  filtro_valor = "";

  constructor(
    //private _http: HttpClient,
    private motoristaservice: MotoristaService,
    private veiculoservice: VeiculoService
  ) {}

  ngOnInit() {
    //  console.log("teste");
    this.motoristas = this.motoristaservice.getMotoristaList();
    this.veiculos = this.veiculoservice.getVeiculoList();

    //this.  _http.get ('https://jsonplaceholder.typicode.com/users').subscribe(
    //(users: any[])=> this.usuarios = users)
  }

  //usuarios = []
  //motoristas = []
}
