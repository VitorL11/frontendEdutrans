import { ActivatedRoute, Route, Router } from "@angular/router";
import { MotoristaService } from "./../motorista.service";
import { Motorista } from "./../motorista";
import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { Veiculo } from 'src/app/veiculos/veiculo';
import { Linha } from 'src/app/linhas/linha';
import { LinhaService } from 'src/app/linhas/linha.service';
import { VeiculoService } from 'src/app/veiculos/veiculo.service';

@Component({
  selector: "app-update-motorista",
  templateUrl: "./update-motorista.component.html",
  styleUrls: ["./update-motorista.component.css"]
})
export class UpdateMotoristaComponent implements OnInit {
  linhas: Observable<Linha>;
  veiculos: Observable<Veiculo>;
  id: number;
  motorista: Motorista;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private MotoristaService: MotoristaService,
    private linhaservice: LinhaService,
    private veiculoservice: VeiculoService
  ) {}

  ngOnInit() {
    this.motorista = new Motorista();

    this.id = this.route.snapshot.params["id"];

    this.MotoristaService.getMotorista(this.id).subscribe(
      data => {
        console.log(data);
        this.motorista = data;
      },
      error => console.log(error)
    );
    this.linhas = this.linhaservice.getLinhaList();
    this.veiculos = this.veiculoservice.getVeiculoList();
  }

  updateMotorista() {
    this.MotoristaService.updateMotorista(this.id, this.motorista).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.motorista = new Motorista();
    this.gotoList();
  }

  onSubmit() {
    this.updateMotorista();
  }

  gotoList() {
    this.router.navigate(["/listMotorista"]);
  }
}
