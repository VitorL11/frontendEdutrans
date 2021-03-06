import { Observable } from "rxjs";
import { Router, ActivatedRoute } from "@angular/router";
import { LinhaService } from "./../linha.service";
import { Linha } from "./../linha";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-list-linha",
  templateUrl: "./list-linha.component.html",
  styleUrls: ["./list-linha.component.css"],
})

export class ListLinhaComponent implements OnInit {
  public paginaAtual = 1;
  linha: Linha;
  linhas: Observable<Linha[]>;
  handleSearch(value: string){
    //console.log(value);
    this.filtro_valor = value;
  }

  filtro_valor = ''

  constructor(private Route: ActivatedRoute,
    private router: Router,
    private linhaservice: LinhaService) {}


  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.linhas = this.linhaservice.getLinhaList();
  }
  list() {
    this.router.navigate(["linhas"]);
  }

  deleteLinha(id: number) {
    this.linhaservice.deleteLinha(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error)
    );
  }

  detalheLinha(id: number) {

    this.router.navigate(['detailsLinha', id]);

    // console.log(id);
    // this.linhaservice.getLinha(id).subscribe(
    //   data => {
    //     console.log(data);

    //   },
    //   error => console.log(error)
    //   );

  }

  updateLinha(id: number) {
    this.router.navigate(['updateLinha', id]);
  }
}
