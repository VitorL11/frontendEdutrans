import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-lin',
  templateUrl: './search-lin.component.html',
  styleUrls: ['./search-lin.component.css']
})
export class SearchLinComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.searchlin.valueChanges
    .pipe (
      debounceTime (300)
    )
    .subscribe(value => this.searchlinEmitter.emit(value))
  }

  searchlin = new FormControl('')

  @Output('searchlin') searchlinEmitter = new EventEmitter<string>();

}
