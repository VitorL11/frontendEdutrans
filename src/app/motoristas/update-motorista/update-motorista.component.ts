import { ActivatedRoute, Route, Router } from "@angular/router";
import { MotoristaService } from "./../motorista.service";
import { Motorista } from "./../motorista";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-update-motorista",
  templateUrl: "./update-motorista.component.html",
  styleUrls: ["./update-motorista.component.css"]
})
export class UpdateMotoristaComponent implements OnInit {
  id: number;
  motorista: Motorista;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private MotoristaService: MotoristaService
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
