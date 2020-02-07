import { Observable } from "rxjs";
import { Router, ActivatedRoute } from "@angular/router";
import { EmpresaService } from "./../empresa.service";
import { Empresa } from "./../empresa";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-list-empresa",
  templateUrl: "./list-empresa.component.html",
  styleUrls: ["./list-empresa.component.css"]
})
export class ListEmpresaComponent implements OnInit {
  empresa: Empresa;
  empresas: Observable<Empresa[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private empresaservice: EmpresaService
  ) {}

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.empresas = this.empresaservice.getEmpresaList();
  }
  list() {
    this.router.navigate(["empresas"]);
  }

  deleteEmpresa(id: number) {
    this.empresaservice.deleteEmpresa(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error)
    );
  }

  detalheEmpresa(id: number) {
    this.router.navigate(["detailsEmpresa/:id", id]);
  }

  updateEmpresa(id: number) {
    this.router.navigate(["updateEmpresa/:id", id]);
  }
}
