import { LinhaService } from "./../linha.service";
import { Linha } from "./../linha";
import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-details-linha",
  templateUrl: "./details-linha.component.html",
  styleUrls: ["./details-linha.component.css"]
})
export class DetailsLinhaComponent implements OnInit {
  id: number;
  linha: Linha;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private linhaservice: LinhaService
  ) {}

  ngOnInit() {
    this.linha = new Linha();

    this.id = this.route.snapshot.params['id'];
    //console.log(this.id);
    this.linhaservice.getLinha(this.id).subscribe(
      data => {
        console.log(data)
        this.linha = data;
      },
      error => console.log(error)
    );
      console.log(this.linha.nome)
    this.linha.nome = 'yteste';
  }

  list() {
    this.router.navigate(["listLinha/:id"]);
  }
}
