import { Component, OnInit, Output } from "@angular/core";
import { FormControl } from "@angular/forms";
import { EventEmitter } from "events";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: "app-buscar",
  templateUrl: "./buscar.component.html",
  styleUrls: ["./buscar.component.css"]
})
export class BuscarComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.buscar.valueChanges
      .pipe(debounceTime(300))

      .subscribe(value => this.buscarEmitter.emit(value));
  }
  buscar = new FormControl("");

  @Output('buscar') buscarEmitter = new EventEmitter<>();
}
