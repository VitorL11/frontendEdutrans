import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from "@angular/forms";
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-vei',
  templateUrl: './search-vei.component.html',
  styleUrls: ['./search-vei.component.css']
})
export class SearchVeiComponent implements OnInit {

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
