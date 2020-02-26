import { Component, OnInit } from "@angular/core";
import { LinhaService } from "../linhas/linha.service";
import { Observable } from "rxjs";
import { Linha } from "../linhas/linha";

@Component({
  selector: "app-md",
  templateUrl: "./md.component.html",
  styleUrls: ["./md.component.css"]
})
export class MdComponent implements OnInit {
  linhas: Observable<Linha>;
  linha: Linha = new Linha();
  submitted = false;
  constructor(private linhaservice: LinhaService) {}

  ngOnInit() {
    this.linhas = this.linhaservice.getLinhaList();
    console.log(this.linhas);
  }

  onSubmit() {
    this.submitted = true;
  }
}
