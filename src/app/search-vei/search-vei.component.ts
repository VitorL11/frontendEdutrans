import { debounceTime } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search-vei',
  templateUrl: './search-vei.component.html',
  styleUrls: ['./search-vei.component.css']
})
export class SearchVeiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.searchvei.valueChanges
    .pipe (
      debounceTime (300)
    )
    .subscribe(value => this.searchveiEmitter.emit(value))
  }

  searchvei = new FormControl('')

  @Output('searchvei') searchveiEmitter = new EventEmitter<string>();

}
