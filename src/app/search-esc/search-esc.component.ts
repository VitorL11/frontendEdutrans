import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-esc',
  templateUrl: './search-esc.component.html',
  styleUrls: ['./search-esc.component.css']
})
export class SearchEscComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.searchesc.valueChanges
    .pipe (
      debounceTime (300)
    )
    .subscribe(value => this.searchescEmitter.emit(value))
  }

  searchesc = new FormControl('')

  @Output('searchesc') searchescEmitter = new EventEmitter<string>();

}
