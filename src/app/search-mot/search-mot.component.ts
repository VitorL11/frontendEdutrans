import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-mot',
  templateUrl: './search-mot.component.html',
  styleUrls: ['./search-mot.component.css']
})
export class SearchMotComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.searchmot.valueChanges
    .pipe (
      debounceTime (300)
    )
    .subscribe(value => this.searchveiEmitter.emit(value))
  }

  searchmot = new FormControl('')

  @Output('searchmot') searchveiEmitter = new EventEmitter<string>();

}
