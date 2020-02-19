import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-emp',
  templateUrl: './search-emp.component.html',
  styleUrls: ['./search-emp.component.css']
})
export class SearchEmpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.searchemp.valueChanges
    .pipe (
      debounceTime (300)
    )
    .subscribe(value => this.searchempEmitter.emit(value))
  }

  searchemp = new FormControl('')

  @Output('searchemp') searchempEmitter = new EventEmitter<string>();

}
