import { debounceTime } from 'rxjs/operators';
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    this.search.valueChanges
    .pipe(
      debounceTime (300)
    )
    .subscribe(value => this.searchEmitter.emit(value));
  }

  search = new FormControl("");

  @Output("search") searchEmitter = new EventEmitter<string>();
  
}
