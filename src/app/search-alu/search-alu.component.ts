import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-alu',
  templateUrl: './search-alu.component.html',
  styleUrls: ['./search-alu.component.css']
})
export class SearchAluComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.searchalu.valueChanges
    .pipe (
      debounceTime (300)
    )
    .subscribe(value => this.searchaluEmitter.emit(value))
  }

  searchalu = new FormControl('')

  @Output('searchalu') searchaluEmitter = new EventEmitter<string>();

}

