import { ActivatedRoute, Route, Router } from "@angular/router";
import { LinhaService } from "./../linha.service";
import { Linha } from "./../linha";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-update-linha",
  templateUrl: "./update-linha.component.html",
  styleUrls: ["./update-linha.component.css"]
})
export class UpdateLinhaComponent implements OnInit {
  id: number;
  linha: Linha;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private linhaService: LinhaService
  ) {}

  ngOnInit() {
    this.linha = new Linha();

    this.id = this.route.snapshot.params["id"];

    this.linhaService.getLinha(this.id).subscribe(
      data => {
        console.log(data);
        this.linha = data;
      },
      error => console.log(error)
    );
  }

  updateLinha() {
    this.linhaService.updateLinha(this.id, this.linha).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.linha = new Linha();
    this.gotoList();
  }

  onSubmit() {
    this.updateLinha();
  }

  gotoList() {
    this.router.navigate(["/listLinha"]);
  }
}
